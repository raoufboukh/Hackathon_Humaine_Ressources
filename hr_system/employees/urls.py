# hr_system/employees/urls.py

from rest_framework import routers
from .views import EmployeeViewSet, LeaveRequestViewSet, PayrollViewSet, ContractViewSet

router = routers.DefaultRouter()
router.register(r'employees', EmployeeViewSet)
router.register(r'leave-requests', LeaveRequestViewSet)
router.register(r'payrolls', PayrollViewSet)
router.register(r'contracts', ContractViewSet)

urlpatterns = router.urls