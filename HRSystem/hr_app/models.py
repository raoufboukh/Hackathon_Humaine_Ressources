from django.db import models
from django.contrib.auth.models import User
from decimal import Decimal
from .calculators import SalaireCalculator
from django.utils import timezone

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
    notified_colleague = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.status}"

# Payroll Management
class Payroll(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    salaire_base = models.DecimalField(max_digits=10, decimal_places=2)
    primes = models.ManyToManyField(Prime, blank=True)
    net_salary = models.DecimalField(max_digits=10, decimal_places=2, editable=False, default=0)
    created_at = models.DateTimeField(default=timezone.now)  # Add this field

    def save(self, *args, **kwargs):
        if not self.id:  # Only set created_at for new instances
            self.created_at = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Payroll for {self.user.username}"
# HR Document Management
class HRDocument(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='documents/')
    expiration_date = models.DateField(null=True, blank=True)
    signed = models.BooleanField(default=False)

    def __str__(self):
        return self.name
