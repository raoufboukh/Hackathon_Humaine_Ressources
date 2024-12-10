from django.db import models
from django.contrib.auth.models import User
from decimal import Decimal
from .calculators import SalaireCalculator
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.db.models import Q

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
    nom = models.CharField(max_length=100)
    montant = models.DecimalField(max_digits=10, decimal_places=2)
    imposable = models.BooleanField()
    cotisable = models.BooleanField()

    def __str__(self):
        return self.nom
# Absence and Leave Management
class LeaveRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
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
    
# Payroll Management
class Payroll(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    salaire_base = models.DecimalField(max_digits=10, decimal_places=2)
    primes = models.ManyToManyField('Prime', blank=True)
    net_salary = models.DecimalField(max_digits=10, decimal_places=2, editable=False, default=0)
    created_at = models.DateTimeField(default=timezone.now)

    def calculate_net_salary(self):
        from .calculators import SalaireCalculator
        calculator = SalaireCalculator(self.salaire_base, list(self.primes.all()))
        return calculator.calculer_salaire_net()

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.net_salary = self.calculate_net_salary()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Payroll for {self.user.username}"

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
    employee = models.ForeignKey(User, on_delete=models.CASCADE)
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
