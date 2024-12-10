from rest_framework import viewsets, status 
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from mongoengine.errors import DoesNotExist
from .models import Employee, LeaveRequest, Payroll, Contract
from .serializers import (
    EmployeeSerializer,
    LeaveRequestSerializer, 
    PayrollSerializer,
    ContractSerializer
)
from datetime import timedelta

class EmployeeViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    
    def list(self, request):
        """List all employees"""
        employees = Employee.objects()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

    def create(self, request):
        """Create a new employee"""
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            employee = serializer.save()
            return Response(EmployeeSerializer(employee).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """Retrieve a specific employee"""
        try:
            employee = Employee.objects.get(id=pk)
            serializer = EmployeeSerializer(employee)
            return Response(serializer.data)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, pk=None):
        """Update an employee"""
        try:
            employee = Employee.objects.get(id=pk)
            serializer = EmployeeSerializer(employee, data=request.data)
            if serializer.is_valid():
                employee = serializer.save()
                return Response(EmployeeSerializer(employee).data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, pk=None):
        """Delete an employee"""
        try:
            employee = Employee.objects.get(id=pk)
            employee.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    @action(detail=True, methods=['get'])
    def leaves(self, request, pk=None):
        """Get all leave requests for an employee"""
        try:
            employee = Employee.objects.get(id=pk)
            leaves = LeaveRequest.objects(employee=employee)
            serializer = LeaveRequestSerializer(leaves, many=True)
            return Response(serializer.data)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class LeaveRequestViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        """List all leave requests"""
        leaves = LeaveRequest.objects()
        serializer = LeaveRequestSerializer(leaves, many=True)
        return Response(serializer.data)

    def create(self, request):
        """Create a new leave request"""
        serializer = LeaveRequestSerializer(data=request.data)
        if serializer.is_valid():
            leave = serializer.save()
            return Response(LeaveRequestSerializer(leave).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """Retrieve a specific leave request"""
        try:
            leave = LeaveRequest.objects.get(id=pk)
            serializer = LeaveRequestSerializer(leave)
            return Response(serializer.data)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, pk=None):
        """Update a leave request"""
        try:
            leave = LeaveRequest.objects.get(id=pk)
            serializer = LeaveRequestSerializer(leave, data=request.data)
            if serializer.is_valid():
                leave = serializer.save()
                return Response(LeaveRequestSerializer(leave).data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, pk=None):
        """Delete a leave request"""
        try:
            leave = LeaveRequest.objects.get(id=pk)
            leave.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    @action(detail=True, methods=['post'])
    def approve(self, request, pk=None):
        """Approve a leave request"""
        try:
            leave = LeaveRequest.objects.get(id=pk)
            leave.status = 'Approved'
            leave.save()
            return Response({'status': 'Leave request approved'})
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    @action(detail=True, methods=['post'])
    def reject(self, request, pk=None):
        """Reject a leave request"""
        try:
            leave = LeaveRequest.objects.get(id=pk)
            leave.status = 'Rejected'
            leave.save()
            return Response({'status': 'Leave request rejected'})
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class PayrollViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        """List all payroll records"""
        payrolls = Payroll.objects()
        serializer = PayrollSerializer(payrolls, many=True)
        return Response(serializer.data)

    def create(self, request):
        """Create a new payroll record"""
        serializer = PayrollSerializer(data=request.data)
        if serializer.is_valid():
            payroll = serializer.save()
            return Response(PayrollSerializer(payroll).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """Retrieve a specific payroll record"""
        try:
            payroll = Payroll.objects.get(id=pk)
            serializer = PayrollSerializer(payroll)
            return Response(serializer.data)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, pk=None):
        """Update a payroll record"""
        try:
            payroll = Payroll.objects.get(id=pk)
            serializer = PayrollSerializer(payroll, data=request.data)
            if serializer.is_valid():
                payroll = serializer.save()
                return Response(PayrollSerializer(payroll).data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, pk=None):
        """Delete a payroll record"""
        try:
            payroll = Payroll.objects.get(id=pk)
            payroll.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class ContractViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        """List all contracts"""
        contracts = Contract.objects()
        serializer = ContractSerializer(contracts, many=True)
        return Response(serializer.data)

    def create(self, request):
        """Create a new contract"""
        serializer = ContractSerializer(data=request.data)
        if serializer.is_valid():
            contract = serializer.save()
            return Response(ContractSerializer(contract).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """Retrieve a specific contract"""
        try:
            contract = Contract.objects.get(id=pk)
            serializer = ContractSerializer(contract)
            return Response(serializer.data)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, pk=None):
        """Update a contract"""
        try:
            contract = Contract.objects.get(id=pk)
            serializer = ContractSerializer(contract, data=request.data)
            if serializer.is_valid():
                contract = serializer.save()
                return Response(ContractSerializer(contract).data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, pk=None):
        """Delete a contract"""
        try:
            contract = Contract.objects.get(id=pk)
            contract.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    @action(detail=True, methods=['post'])
    def renew(self, request, pk=None):
        """Renew a contract"""
        try:
            contract = Contract.objects.get(id=pk)
            if contract.end_date:
                contract.end_date += timedelta(days=365)
                contract.save()
                return Response({'status': 'Contract renewed successfully'})
            return Response(
                {'error': 'Cannot renew contract without end date'},
                status=status.HTTP_400_BAD_REQUEST
            )
        except DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)