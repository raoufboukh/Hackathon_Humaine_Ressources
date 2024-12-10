# employees/forms.py

from django import forms
from .models import LeaveRequest, Employee

class LeaveRequestForm(forms.ModelForm):
    class Meta:
        model = LeaveRequest
        fields = ['employee', 'leave_type', 'start_date', 'end_date', 'reason']
        widgets = {
            'start_date': forms.DateInput(attrs={'type': 'date'}),
            'end_date': forms.DateInput(attrs={'type': 'date'}),
        }

class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = ['user', 'employee_id', 'department', 'position', 'hire_date', 'base_salary']
        widgets = {
            'hire_date': forms.DateInput(attrs={'type': 'date'}),
        }