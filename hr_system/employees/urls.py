from django.urls import path, include
from rest_framework import routers
from .views import (
    EmployeeViewSet, LeaveRequestViewSet, PayrollViewSet, ContractViewSet,
    user_login, Users, UserUpdateView, UserDelete,
    NotificationListView, NotificationUpdateView, SentMessageView
)

router = routers.DefaultRouter()
router.register(r'employees', EmployeeViewSet, basename='employee')
router.register(r'leave-requests', LeaveRequestViewSet, basename='leaverequest')
router.register(r'payrolls', PayrollViewSet, basename='payroll')
router.register(r'contracts', ContractViewSet, basename='contract')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', user_login, name='login'),
    path('users/', Users.as_view(), name='users'),
    path('users/<int:pk>/', UserUpdateView.as_view(), name='user_update'),
    path('users/delete/<int:pk>/', UserDelete.as_view(), name='user_delete'),
    path('notifications/', NotificationListView.as_view(), name='notifications'),
    path('notifications/update/', NotificationUpdateView.as_view(), name='notification_update'),
    path('messages/', SentMessageView.as_view(), name='messages'),
]