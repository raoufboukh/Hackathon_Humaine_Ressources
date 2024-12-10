# employees/forms.py

from django import forms
from .models import Employee

class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = ['user', 'department', 'position', 'employee_id', 
                 'date_of_birth', 'phone_number', 'address', 
                 'hire_date', 'employment_status']