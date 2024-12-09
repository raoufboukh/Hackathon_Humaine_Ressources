# employees/admin.py
from django_mongoengine import admin as mongo_admin
from .models import Employee, LeaveRequest, Payroll, Contract

class EmployeeAdmin(mongo_admin.DocumentAdmin):
    pass

class LeaveRequestAdmin(mongo_admin.DocumentAdmin):
    pass

class PayrollAdmin(mongo_admin.DocumentAdmin):
    pass

class ContractAdmin(mongo_admin.DocumentAdmin):
    pass

mongo_admin.site.register(Employee, EmployeeAdmin)
mongo_admin.site.register(LeaveRequest, LeaveRequestAdmin)
mongo_admin.site.register(Payroll, PayrollAdmin)
mongo_admin.site.register(Contract, ContractAdmin)