# employees/urls.py

from django.urls import path
from . import views

app_name = 'employees'

urlpatterns = [
    path('list/', views.employee_list, name='employee_list'),
    path('add/', views.employee_add, name='employee_add'),
    path('<int:pk>/', views.employee_detail, name='employee_detail'),
    path('<int:pk>/edit/', views.employee_edit, name='employee_edit'),
    path('leave-requests/', views.leave_request_list, name='leave_request_list'),
    path('leave-requests/add/', views.leave_request_add, name='leave_request_add'),
    path('leave-requests/<int:pk>/', views.leave_request_detail, name='leave_request_detail'),
    path('leave-requests/<int:pk>/edit/', views.leave_request_edit, name='leave_request_edit'),
]