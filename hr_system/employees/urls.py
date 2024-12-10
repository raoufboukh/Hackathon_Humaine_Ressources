# hr_system/employees/urls.py

from rest_framework import routers
from .views import EmployeeViewSet, LeaveRequestViewSet, PayrollViewSet, ContractViewSet

router = routers.DefaultRouter()
router.register(r'employees', EmployeeViewSet, basename='employee')          # Added basename
router.register(r'leave-requests', LeaveRequestViewSet, basename='leaverequest')  # Added basename
router.register(r'payrolls', PayrollViewSet, basename='payroll')              # Added basename
router.register(r'contracts', ContractViewSet, basename='contract')           # Added basename

urlpatterns = router.urls