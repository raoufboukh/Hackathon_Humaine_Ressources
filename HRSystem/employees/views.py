# employees/views.py

from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .models import LeaveRequest
from .forms import LeaveRequestForm
from django.core.paginator import Paginator
from django.db.models import Q
from .models import Employee
from .forms import EmployeeForm
from django.urls import reverse
from django.contrib import messages

@login_required
def employee_list(request):
    # Get search query from GET parameters
    search_query = request.GET.get('search', '')
    
    # Get all employees with optional search filter
    employees = Employee.objects.all()
    if search_query:
        employees = employees.filter(
            Q(user__first_name__icontains=search_query) |
            Q(user__last_name__icontains=search_query) |
            Q(employee_id__icontains=search_query)
        )
    
    # Sort employees
    sort_by = request.GET.get('sort', 'user__first_name')
    employees = employees.order_by(sort_by)
    
    # Paginate results
    page_number = request.GET.get('page', 1)
    paginator = Paginator(employees, 10)  # 10 employees per page
    page_obj = paginator.get_page(page_number)
    
    context = {
        'page_obj': page_obj,
        'search_query': search_query,
        'sort_by': sort_by
    }
    
    return render(request, 'employees/employee_list.html', context)

@login_required
def employee_add(request):
    if request.method == 'POST':
        form = EmployeeForm(request.POST, request.FILES)
        if form.is_valid():
            employee = form.save(commit=False)
            employee.save()
            messages.success(request, 'Employee added successfully.')
            return redirect('employee_detail', pk=employee.pk)
    else:
        form = EmployeeForm()
    
    return render(request, 'employees/employee_form.html', {'form': form, 'title': 'Add Employee'})

@login_required
def employee_detail(request, pk):
    employee = get_object_or_404(Employee, pk=pk)
    context = {
        'employee': employee,
        'attendance_records': employee.attendance_set.all()[:5],
        'leave_requests': employee.user.leaverequest_set.all()[:5],
        'documents': employee.user.document_set.all(),
    }
    return render(request, 'employees/employee_detail.html', context)

@login_required
def employee_edit(request, pk):
    employee = get_object_or_404(Employee, pk=pk)
    
    if request.method == 'POST':
        form = EmployeeForm(request.POST, request.FILES, instance=employee)
        if form.is_valid():
            form.save()
            messages.success(request, 'Employee updated successfully.')
            return redirect('employee_detail', pk=pk)
    else:
        form = EmployeeForm(instance=employee)
    
    return render(request, 'employees/employee_form.html', {
        'form': form,
        'title': 'Edit Employee',
        'employee': employee
    })

login_required
def leave_request_list(request):
    if request.user.is_staff:
        leave_requests = LeaveRequest.objects.all()
    else:
        leave_requests = LeaveRequest.objects.filter(employee__user=request.user)
    return render(request, 'employees/leave_request_list.html', {'leave_requests': leave_requests})

@login_required
def leave_request_add(request):
    if request.method == 'POST':
        form = LeaveRequestForm(request.POST)
        if form.is_valid():
            leave_request = form.save(commit=False)
            leave_request.employee = request.user.employee
            leave_request.save()
            return redirect('employees:leave_request_list')
    else:
        form = LeaveRequestForm(initial={'employee': request.user.employee})
    return render(request, 'employees/leave_request_form.html', {'form': form})

@login_required
def leave_request_detail(request, pk):
    leave_request = get_object_or_404(LeaveRequest, pk=pk)
    return render(request, 'employees/leave_request_detail.html', {'leave_request': leave_request})

@login_required
def leave_request_edit(request, pk):
    leave_request = get_object_or_404(LeaveRequest, pk=pk)
    if request.method == 'POST':
        form = LeaveRequestForm(request.POST, instance=leave_request)
        if form.is_valid():
            form.save()
            return redirect('employees:leave_request_list')
    else:
        form = LeaveRequestForm(instance=leave_request)
    return render(request, 'employees/leave_request_form.html', {'form': form})