# employees/serializers.py

from rest_framework import serializers
from .models import Employee, LeaveRequest, Payroll, Contract

# Employee Serializer
class EmployeeSerializer(serializers.Serializer):
    """
    Serializer for Employee model.
    """
    id = serializers.CharField(read_only=True)
    first_name = serializers.CharField(required=True, max_length=50)
    last_name = serializers.CharField(required=True, max_length=50)
    email = serializers.EmailField(required=True)
    position = serializers.CharField(max_length=100)
    department = serializers.CharField(max_length=100)
    created_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        """
        Create and return a new Employee instance.
        """
        return Employee(**validated_data).save()

    def update(self, instance, validated_data):
        """
        Update and return an existing Employee instance.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

# Leave Request Serializer
class LeaveRequestSerializer(serializers.Serializer):
    """
    Serializer for LeaveRequest model.
    """
    id = serializers.CharField(read_only=True)
    employee = serializers.CharField(required=True)
    start_date = serializers.DateField(required=True)
    end_date = serializers.DateField(required=True)
    reason = serializers.CharField(allow_blank=True)
    status = serializers.ChoiceField(choices=['Pending', 'Approved', 'Rejected'], default='Pending')
    created_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        """
        Create and return a new LeaveRequest instance.
        """
        employee_id = validated_data.pop('employee')
        employee = Employee.objects.get(id=employee_id)
        leave_request = LeaveRequest(employee=employee, **validated_data)
        leave_request.save()
        return leave_request

    def update(self, instance, validated_data):
        """
        Update and return an existing LeaveRequest instance.
        """
        if 'employee' in validated_data:
            employee_id = validated_data.pop('employee')
            instance.employee = Employee.objects.get(id=employee_id)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

# Payroll Serializer
class PayrollSerializer(serializers.Serializer):
    """
    Serializer for Payroll model.
    """
    id = serializers.CharField(read_only=True)
    employee = serializers.CharField(required=True)
    pay_date = serializers.DateField(required=True)
    gross_salary = serializers.DecimalField(max_digits=10, decimal_places=2)
    deductions = serializers.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    net_salary = serializers.DecimalField(max_digits=10, decimal_places=2)
    created_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        """
        Create and return a new Payroll instance.
        """
        employee_id = validated_data.pop('employee')
        employee = Employee.objects.get(id=employee_id)
        payroll = Payroll(employee=employee, **validated_data)
        payroll.save()
        return payroll

    def update(self, instance, validated_data):
        """
        Update and return an existing Payroll instance.
        """
        if 'employee' in validated_data:
            employee_id = validated_data.pop('employee')
            instance.employee = Employee.objects.get(id=employee_id)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

# Contract Serializer
class ContractSerializer(serializers.Serializer):
    """
    Serializer for Contract model.
    """
    id = serializers.CharField(read_only=True)
    employee = serializers.CharField(required=True)
    contract_type = serializers.ChoiceField(choices=['Permanent', 'Temporary', 'Internship'], required=True)
    start_date = serializers.DateField(required=True)
    end_date = serializers.DateField(allow_null=True)
    document = serializers.FileField(required=False)
    created_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        """
        Create and return a new Contract instance.
        """
        employee_id = validated_data.pop('employee')
        employee = Employee.objects.get(id=employee_id)
        contract = Contract(employee=employee, **validated_data)
        contract.save()
        return contract

    def update(self, instance, validated_data):
        """
        Update and return an existing Contract instance.
        """
        if 'employee' in validated_data:
            employee_id = validated_data.pop('employee')
            instance.employee = Employee.objects.get(id=employee_id)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance