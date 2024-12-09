# employees/views.py

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Employee, LeaveRequest, Payroll, Contract
from .serializers import (
    EmployeeSerializer,
    LeaveRequestSerializer,
    PayrollSerializer,
    ContractSerializer
)

# Employee ViewSet
class EmployeeViewSet(viewsets.ViewSet):
    """
    ViewSet for managing Employees.
    """

    def list(self, request):
        """
        Retrieve all employees.
        """
        employees = Employee.objects()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

    def create(self, request):
        """
        Create a new employee.
        """
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            employee = serializer.save()
            return Response(EmployeeSerializer(employee).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """
        Retrieve a specific employee by ID.
        """
        try:
            employee = Employee.objects.get(id=pk)
        except Employee.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data)

    def update(self, request, pk=None):
        """
        Update an existing employee.
        """
        try:
            employee = Employee.objects.get(id=pk)
        except Employee.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            employee = serializer.save()
            return Response(EmployeeSerializer(employee).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        """
        Delete an employee.
        """
        try:
            employee = Employee.objects.get(id=pk)
        except Employee.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Repeat similar ViewSets for LeaveRequest, Payroll, and Contract

# LeaveRequest ViewSet
class LeaveRequestViewSet(viewsets.ViewSet):
    """
    ViewSet for managing Leave Requests.
    """

    def list(self, request):
        """
        Retrieve all leave requests.
        """
        leaves = LeaveRequest.objects()
        serializer = LeaveRequestSerializer(leaves, many=True)
        return Response(serializer.data)

    def create(self, request):
        """
        Create a new leave request.
        """
        serializer = LeaveRequestSerializer(data=request.data)
        if serializer.is_valid():
            leave_request = serializer.save()
            return Response(LeaveRequestSerializer(leave_request).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """
        Retrieve a specific leave request by ID.
        """
        try:
            leave = LeaveRequest.objects.get(id=pk)
        except LeaveRequest.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = LeaveRequestSerializer(leave)
        return Response(serializer.data)

    def update(self, request, pk=None):
        """
        Update an existing leave request.
        """
        try:
            leave = LeaveRequest.objects.get(id=pk)
        except LeaveRequest.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = LeaveRequestSerializer(leave, data=request.data)
        if serializer.is_valid():
            leave = serializer.save()
            return Response(LeaveRequestSerializer(leave).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        """
        Delete a leave request.
        """
        try:
            leave = LeaveRequest.objects.get(id=pk)
        except LeaveRequest.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        leave.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Similarly, create PayrollViewSet and ContractViewSet following the above pattern

class PayrollViewSet(viewsets.ViewSet):
    """
    ViewSet for managing Payroll.
    """

    def list(self, request):
        """
        Retrieve all payroll records.
        """
        payrolls = Payroll.objects()
        serializer = PayrollSerializer(payrolls, many=True)
        return Response(serializer.data)

    def create(self, request):
        """
        Create a new payroll record.
        """
        serializer = PayrollSerializer(data=request.data)
        if serializer.is_valid():
            payroll = serializer.save()
            return Response(PayrollSerializer(payroll).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """
        Retrieve a specific payroll record by ID.
        """
        try:
            payroll = Payroll.objects.get(id=pk)
        except Payroll.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = PayrollSerializer(payroll)
        return Response(serializer.data)

    def update(self, request, pk=None):
        """
        Update an existing payroll record.
        """
        try:
            payroll = Payroll.objects.get(id=pk)
        except Payroll.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = PayrollSerializer(payroll, data=request.data)
        if serializer.is_valid():
            payroll = serializer.save()
            return Response(PayrollSerializer(payroll).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        """
        Delete a payroll record.
        """
        try:
            payroll = Payroll.objects.get(id=pk)
        except Payroll.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        payroll.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
class ContractViewSet(viewsets.ViewSet):
    """
    ViewSet for managing Contracts.
    """

    def list(self, request):
        """
        Retrieve all contracts.
        """
        contracts = Contract.objects()
        serializer = ContractSerializer(contracts, many=True)
        return Response(serializer.data)

    def create(self, request):
        """
        Create a new contract.
        """
        serializer = ContractSerializer(data=request.data)
        if serializer.is_valid():
            contract = serializer.save()
            return Response(ContractSerializer(contract).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """
        Retrieve a specific contract by ID.
        """
        try:
            contract = Contract.objects.get(id=pk)
        except Contract.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = ContractSerializer(contract)
        return Response(serializer.data)

    def update(self, request, pk=None):
        """
        Update an existing contract.
        """
        try:
            contract = Contract.objects.get(id=pk)
        except Contract.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = ContractSerializer(contract, data=request.data)
        if serializer.is_valid():
            contract = serializer.save()
            return Response(ContractSerializer(contract).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        """
        Delete a contract.
        """
        try:
            contract = Contract.objects.get(id=pk)
        except Contract.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        contract.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)