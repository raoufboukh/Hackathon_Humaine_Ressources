from django.db import models
from django.contrib.auth.models import User
from decimal import Decimal

from employees.models import  Employee, LeaveRequest,  LeaveType
from .calculators import SalaireCalculator
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.db.models import Q

class Attendance(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)  # One-to-Many relationship , 
    clock_in = models.DateTimeField()
    clock_out = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=20,
        choices=[
            ('present', 'Present'),
            ('absent', 'Absent'),
            ('late', 'Late'),
        ],
        default='present'
    )

    def calculate_hours_worked(self):
        if not self.clock_out:
            return 0
        delta = self.clock_out - self.clock_in
        return round(delta.total_seconds() / 3600, 2)

    def __str__(self):
        return f"{self.employee} - {self.clock_in.date()}"
    
class LeaveType(models.Model):
    name = models.CharField(max_length=100)
    days_allowed = models.PositiveIntegerField()
    requires_approval = models.BooleanField(default=True)

    def __str__(self):
        return self.name
class LeaveBalance(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    leave_type = models.ForeignKey(LeaveType, on_delete=models.CASCADE)
    year = models.PositiveIntegerField()
    balance = models.DecimalField(max_digits=5, decimal_places=1)
    
    class Meta:
        unique_together = ['user', 'leave_type', 'year']

class Prime(models.Model):
    name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    taxable = models.BooleanField(default=True)
    contributable = models.BooleanField(default=True)

    def __str__(self):
        return self.name
# Absence and Leave Management
class LeaveRequest(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='employee_leave_requests')  # added related_name to fix the clash
    leave_type = models.ForeignKey(LeaveType, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    reason = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=[
            ('pending', 'Pending'),
            ('approved', 'Approved'),
            ('rejected', 'Rejected'),
        ],
        default='pending'
    )
    backup_person = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='covering_leaves'
    )
    attachment = models.FileField(upload_to='leave_attachments/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def clean(self):
        if self.start_date > self.end_date:
            raise ValidationError("End date must be after start date")
        
        # Check for overlapping leaves
        overlapping = LeaveRequest.objects.filter(
            user=self.user,
            status='approved',
            start_date__lte=self.end_date,
            end_date__gte=self.start_date
        ).exclude(pk=self.pk)
        
        if overlapping.exists():
            raise ValidationError("You have overlapping approved leaves")

class PayrollComponent(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(
        max_length=20,
        choices=[
            ('earning', 'Earning'),
            ('deduction', 'Deduction'),
        ]
    )
    is_taxable = models.BooleanField(default=True)
    is_fixed = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.name} ({self.get_type_display()})"
class PayrollPrime(models.Model):
    payroll = models.ForeignKey('Payroll', on_delete=models.CASCADE)
    prime = models.ForeignKey('Prime', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        unique_together = ['payroll', 'prime']
# Payroll Management
class Payroll(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True )
    period_start = models.DateField()
    period_end = models.DateField()
    base_salary = models.DecimalField(max_digits=10, decimal_places=2)
    overtime_hours = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    overtime_rate = models.DecimalField(max_digits=5, decimal_places=2, default=1.5)
    deductions = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    taxes = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    net_salary = models.DecimalField(max_digits=10, decimal_places=2)
    primes = models.ManyToManyField('Prime', through='PayrollPrime')

    def get_attendance_records(self):
        return Attendance.objects.filter(
            employee=self.employee,
            clock_in__date__range=(self.period_start, self.period_end)
        )

    def calculate_hours_and_overtime(self):
        total_hours = Decimal('0')
        try:
            for record in self.get_attendance_records():
                if record.clock_out:
                    hours = Decimal(str(record.calculate_hours_worked()))
                    total_hours += hours
            
            standard_hours = Decimal('176')  # 8 hours * 22 days
            overtime_hours = max(Decimal('0'), total_hours - standard_hours)
            return total_hours, overtime_hours
        except Exception as e:
            print(f"Error calculating hours: {e}")
            return Decimal('0'), Decimal('0')

    def calculate_net_salary(self):
        try:
            total_hours, overtime = self.calculate_hours_and_overtime()
            hourly_rate = self.base_salary / Decimal('176')
            regular_hours = total_hours - overtime
            
            regular_pay = regular_hours * hourly_rate
            overtime_pay = overtime * hourly_rate * self.overtime_rate
            
            prime_total = self.payrollprime_set.aggregate(
                total=models.Sum('amount'))['total'] or Decimal('0')
            
            gross_salary = regular_pay + overtime_pay + prime_total
            net_salary = gross_salary - self.deductions - self.taxes
            self.overtime_hours = overtime
            return net_salary
        except Exception as e:
            print(f"Error calculating salary: {e}")
            return self.base_salary

    def save(self, *args, **kwargs):
        if not self.net_salary:
            self.net_salary = self.calculate_net_salary()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Payroll for {self.employee.user.get_full_name()} ({self.period_start} to {self.period_end})"
    
class PayrollDetail(models.Model):
    payroll = models.ForeignKey(Payroll, on_delete=models.CASCADE)
    component = models.ForeignKey(PayrollComponent, on_delete=models.PROTECT)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    class Meta:
        unique_together = ['payroll', 'component']

class DocumentCategory(models.Model):
    name = models.CharField(max_length=100)
    required_for_onboarding = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name

class Document(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(DocumentCategory, on_delete=models.PROTECT)
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='employee_documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    expiry_date = models.DateField(null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    verified_by = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL, 
        null=True, 
        related_name='verified_documents'
    )
    
    def is_expired(self):
        return self.expiry_date and self.expiry_date < timezone.now().date()


# HR Document Management
class HRDocument(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='documents/')
    expiration_date = models.DateField(null=True, blank=True)
    signed = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class PerformanceReview(models.Model):
    employee = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)
    reviewer = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='reviews_given'
    )
    period_start = models.DateField()
    period_end = models.DateField()
    overall_rating = models.DecimalField(max_digits=3, decimal_places=2)
    status = models.CharField(
        max_length=20,
        choices=[
            ('draft', 'Draft'),
            ('submitted', 'Submitted'),
            ('acknowledged', 'Acknowledged'),
        ],
        default='draft'
    )
    submitted_at = models.DateTimeField(null=True, blank=True)
    acknowledged_at = models.DateTimeField(null=True, blank=True)

class PerformanceGoal(models.Model):
    review = models.ForeignKey(PerformanceReview, on_delete=models.CASCADE)
    description = models.TextField()
    target_date = models.DateField()
    achievement = models.TextField(blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True)

# models.py
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    read_at = models.DateTimeField(null=True, blank=True)
    notification_type = models.CharField(
        max_length=20,
        choices=[
            ('leave', 'Leave Request'),
            ('document', 'Document'),
            ('payroll', 'Payroll'),
            ('performance', 'Performance Review'),
        ]
    )
    related_object_id = models.PositiveIntegerField()
    related_object_type = models.CharField(max_length=100)

