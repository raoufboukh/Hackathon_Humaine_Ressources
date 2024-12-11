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

from django.http import JsonResponse
from django.core.serializers import serialize
from .models import Employee

@login_required
def employee_list(request):
    employees = Employee.objects.select_related('user', 'department').all()
    employee_data = list(employees.values(
        'id',
        'user__first_name',
        'user__last_name',
        'employee_id',
        'department__name',
        'position__title',
        'hire_date',
        'employment_status'
    ))
    return JsonResponse(employee_data, safe=False)

from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.core.paginator import Paginator
from django.db.models import Q
from django.contrib.auth.models import User
from employees.models import Employee

def employee_list(request):
    # Get the search query parameter
    search_query = request.GET.get('search', '')

    # Start by getting all users who are not staff
    users = User.objects.filter(is_staff=False)

    # If there's a search query, filter users based on the query
    if search_query:
        users = users.filter(
            Q(first_name__icontains=search_query) |
            Q(last_name__icontains=search_query) |
            Q(username__icontains=search_query)
        )

    # Get the sorting field (defaults to sorting by first name)
    sort_by = request.GET.get('sort', 'first_name')
    users = users.order_by(sort_by)

    # Pagination logic
    page_number = request.GET.get('page', 1)
    paginator = Paginator(users, 10)
    page_obj = paginator.get_page(page_number)

    # Prepare the employee data (fetching employee data associated with the user)
    employees_data = []
    for user in page_obj.object_list:
        employee = Employee.objects.filter(user=user).first()  # Get the employee linked to the user
        if employee:
            employees_data.append({
                'id': employee.id,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'employee_id': employee.employee_id,
                'department': employee.department.name if employee.department else None,
            })

    # Return the JSON response with employee data and pagination information
    return JsonResponse({
        'employees': employees_data,
        'pagination': {
            'has_next': page_obj.has_next(),
            'has_previous': page_obj.has_previous(),
            'current_page': page_obj.number,
            'total_pages': paginator.num_pages,
        }
    })


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