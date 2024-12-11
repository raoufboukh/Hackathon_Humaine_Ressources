from django.db import models
from django.contrib.auth.models import User
from decimal import Decimal

from employees.models import  Employee, LeaveRequest,  LeaveType
from .calculators import SalaireCalculator, Prime as PrimeCalculator
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.db.models import Q


class CompanyPolicy(models.Model):
    """Model to store company-specific HR policies"""
    name = models.CharField(max_length=100)
    pay_frequency = models.CharField(
        max_length=20,
        choices=[
            ('hourly', 'Per Hour'),
            ('daily', 'Per Day'),
            ('monthly', 'Monthly Salary')
        ],
        default='monthly'
    )
    overtime_calculation = models.CharField(
        max_length=20,
        choices=[
            ('fixed', 'Fixed Rate'),
            ('progressive', 'Progressive Rate'),
            ('none', 'No Overtime')
        ],
        default='fixed'
    )
    leave_policy = models.CharField(
        max_length=20,
        choices=[
            ('standard', 'Standard Leave Policy'),
            ('flexible', 'Flexible Leave Policy'),
            ('custom', 'Custom Leave Policy')
        ],
        default='standard'
    )
    tax_calculation_method = models.CharField(
        max_length=20,
        choices=[
            ('standard', 'Standard Tax'),
            ('simplified', 'Simplified Tax'),
            ('custom', 'Custom Tax Rules')
        ],
        default='standard'
    )

    def __str__(self):
        return self.name

class EmployeeFingerprint(models.Model):
    """Model to store fingerprint data for each employee"""
    employee = models.OneToOneField(Employee, on_delete=models.CASCADE, related_name='fingerprint')
    fingerprint_id = models.CharField(max_length=100, unique=True)
    
    def __str__(self):
        return f"{self.employee.name}'s Fingerprint"

class Attendance(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='attendances')
    fingerprint = models.ForeignKey(EmployeeFingerprint, on_delete=models.CASCADE, null=True, blank=True)
    clock_in = models.DateTimeField()
    clock_out = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=20,
        choices=[
            ('present', 'Present'),
            ('absent', 'Absent'),
            ('late', 'Late'),
            ('half_day', 'Half Day'),
            ('work_from_home', 'Work From Home')
        ],
        default='present'
    )
    notes = models.TextField(blank=True)
    
    def calculate_hours_worked(self):
        """Calculate total hours worked with validation"""
        if not self.clock_out:
            return Decimal('0.00')
        if self.clock_out < self.clock_in:
            raise ValidationError("Clock out time cannot be before clock in time")
        delta = self.clock_out - self.clock_in
        return Decimal(str(round(delta.total_seconds() / 3600, 2)))
    
    def calculate_overtime_hours(self):
        """Calculate overtime hours based on company policy"""
        company_policy = self.employee.company_policy
        regular_hours = 8  # Default workday hours
        
        if company_policy.pay_frequency == 'hourly':
            hours_worked = self.calculate_hours_worked()
            return max(Decimal('0.00'), hours_worked - regular_hours)
        return Decimal('0.00')
    
    def is_late(self):
        """Check if employee was late based on schedule"""
        # You can customize this based on company's start time
        work_start_time = self.clock_in.replace(hour=9, minute=0)
        return self.clock_in > work_start_time
    
    def clean(self):
        """Validate attendance data"""
        super().clean()
        if self.clock_out and self.clock_out < self.clock_in:
            raise ValidationError("Clock out must be after clock in time")
        
        # Check for overlapping attendance records
        overlapping = Attendance.objects.filter(
            employee=self.employee,
            clock_in__date=self.clock_in.date()
        ).exclude(pk=self.pk)
        
        if overlapping.exists():
            raise ValidationError("Employee already has attendance record for this date")
    
    class Meta:
        ordering = ['-clock_in']
        indexes = [
            models.Index(fields=['employee', 'clock_in']),
            models.Index(fields=['status'])
        ]
        constraints = [
            models.CheckConstraint(
                check=models.Q(clock_out__isnull=True) | models.Q(clock_out__gt=models.F('clock_in')),
                name='valid_clock_out_time'
            )
        ]
    
    def save(self, *args, **kwargs):
        """Auto-update status based on attendance"""
        if not self.status:
            if self.is_late():
                self.status = 'late'
            else:
                self.status = 'present'
        super().save(*args, **kwargs)
    
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
    """Enhanced PayrollComponent with policy-based calculations"""
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
    calculation_method = models.CharField(
        max_length=20,
        choices=[
            ('fixed', 'Fixed Amount'),
            ('percentage', 'Percentage of Base'),
            ('formula', 'Custom Formula')
        ],
        default='fixed'
    )
    calculation_formula = models.TextField(
        null=True, 
        blank=True,
        help_text="Python expression for custom calculations"
    )
    
    def calculate_amount(self, base_amount, policy):
        """Calculate component amount based on policy and method"""
        if self.calculation_method == 'fixed':
            return self.fixed_amount
        elif self.calculation_method == 'percentage':
            return base_amount * (self.percentage_value / 100)
        elif self.calculation_method == 'formula':
            # Safe eval of formula with context
            return self._evaluate_formula(base_amount, policy)
        return 0
    

class PayrollPrime(models.Model):
    payroll = models.ForeignKey('Payroll', on_delete=models.CASCADE)
    prime = models.ForeignKey('Prime', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        unique_together = ['payroll', 'prime']
# Payroll Management
class Payroll(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('calculated', 'Calculated'),
        ('approved', 'Approved'),
        ('paid', 'Paid')
    ]

    employee = models.ForeignKey('employees.Employee', on_delete=models.CASCADE,related_name='payrolls')
    company_policy = models.ForeignKey('CompanyPolicy', on_delete=models.PROTECT)
    period_start = models.DateField()
    period_end = models.DateField()
    base_salary = models.DecimalField(max_digits=10, decimal_places=2)
    net_salary = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    
    # Policy-dependent fields
    work_units = models.DecimalField(
        max_digits=10, 
        decimal_places=2,
        help_text="Hours or Days based on policy"
    )
    unit_rate = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        help_text="Rate per hour/day based on policy"
    )

    def calculate_base_pay(self):
        """Calculate base pay according to company policy"""
        if self.company_policy.pay_frequency == 'hourly':
            return self.work_units * self.unit_rate
        elif self.company_policy.pay_frequency == 'daily':
            return self.work_units * self.unit_rate
        else:
            return self.base_salary

    def calculate_overtime(self):
        """Calculate overtime based on policy"""
        if self.company_policy.overtime_calculation == 'none':
            return 0
        # Implement different overtime calculations based on policy
        return self._calculate_policy_based_overtime()

    def calculate_taxes(self):
        """Calculate taxes based on policy"""
        if self.company_policy.tax_calculation_method == 'standard':
            return self._calculate_standard_tax()
        elif self.company_policy.tax_calculation_method == 'simplified':
            return self._calculate_simplified_tax()
        else:
            return self._calculate_custom_tax()
    def calculate_net_pay(self):
        primes = []
        for payroll_prime in self.payrollprime_set.all():
            prime = payroll_prime.prime
            primes.append(PrimeCalculator(
                montant=payroll_prime.amount,
                cotisable=prime.contributable,
                imposable=prime.taxable
            ))

        salaire_calculator = SalaireCalculator(
            salaire_base=self.base_salary,
            primes=primes
        )

        self.deductions = salaire_calculator.calculer_retenues_sociales()
        self.taxes = salaire_calculator.calculer_irg()
        self.net_salary = salaire_calculator.calculer_salaire_net()
        return self.net_salary

    def save(self, *args, **kwargs):
        self.calculate_net_pay()
        super().save(*args, **kwargs)
    
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

