# employees/models.py

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.core.exceptions import ValidationError
from decimal import Decimal

class Department(models.Model):
    """Department model to organize employees"""
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Position(models.Model):
    """Position/Role model for employees"""
    title = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    salary_range_min = models.DecimalField(max_digits=10, decimal_places=2)
    salary_range_max = models.DecimalField(max_digits=10, decimal_places=2)

    def clean(self):
        if self.salary_range_min > self.salary_range_max:
            raise ValidationError("Minimum salary cannot be greater than maximum salary")

    def __str__(self):
        return f"{self.title} - {self.department}"

class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    position = models.ForeignKey(Position, on_delete=models.SET_NULL, null=True)
    employee_id = models.CharField(max_length=10, unique=True)
    date_of_birth = models.DateField()
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    hire_date = models.DateField()
    employment_status = models.CharField(
        max_length=20,
        choices=[
            ('active', 'Active'),
            ('on_leave', 'On Leave'),
            ('terminated', 'Terminated')
        ],
        default='active'
    )

    def __str__(self):
        return f"{self.user.get_full_name()} ({self.employee_id})"

class Performance(models.Model):
    """Employee performance tracking"""
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    review_period_start = models.DateField()
    review_period_end = models.DateField()
    reviewer = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        related_name='employee_reviews_given'  # Changed related_name to be unique
    )
    performance_score = models.DecimalField(max_digits=3, decimal_places=2)
    comments = models.TextField()
    goals_achieved = models.TextField()
    areas_of_improvement = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def clean(self):
        if self.performance_score < 0 or self.performance_score > 5:
            raise ValidationError("Performance score must be between 0 and 5")

    def __str__(self):
        return f"{self.employee} - {self.review_period_start}"
class Attendance(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    clock_in = models.DateTimeField()
    clock_out = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=20,
        choices=[
            ('present', 'Present'),
            ('absent', 'Absent'),
            ('late', 'Late'),
            ('half_day', 'Half Day')
        ],
        default='present'
    )
    notes = models.TextField(blank=True)

    def calculate_hours_worked(self):
        if not self.clock_out:
            return 0
        delta = self.clock_out - self.clock_in
        return round(delta.total_seconds() / 3600, 2)

    def calculate_overtime_hours(self, regular_hours=8):
        hours_worked = self.calculate_hours_worked()
        return max(0, hours_worked - regular_hours)

    def __str__(self):
        return f"{self.user} - {self.clock_in.date()}"