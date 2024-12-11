from django.contrib import admin
from .models import Employee, Department, Position, Performance, LeaveType, LeaveBalance, Prime, LeaveRequest

class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('employee_id', 'user', 'department', 'position', 'employment_status', 'base_salary')
    search_fields = ('employee_id', 'user__username', 'user__first_name', 'user__last_name')
    list_filter = ('department', 'position', 'employment_status')
    fieldsets = (
        (None, {
            'fields': ('user', 'employee_id', 'department', 'position', 'employment_status', 'base_salary')
        }),
        ('Personal Info', {
            'fields': ('date_of_birth', 'phone_number', 'address', 'hire_date')
        }),
    )

admin.site.register(Employee, EmployeeAdmin)
admin.site.register(Department)
admin.site.register(Position)
admin.site.register(Performance)
admin.site.register(LeaveType)
admin.site.register(LeaveBalance)
admin.site.register(Prime)
admin.site.register(LeaveRequest)