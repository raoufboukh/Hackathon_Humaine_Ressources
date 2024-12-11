from django.urls import path, include
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import LeaveRequestListCreateView, LeaveRequestDetailView, LoginView, LogoutView, PayrollListCreateView, PayrollDetailView, HRDocumentListCreateView, HRDocumentDetailView, PayrollViewSet, PrimeViewSet, AdminLoginView
from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'payrolls', PayrollViewSet, basename='payroll')
router.register(r'primes', PrimeViewSet, basename='prime')
urlpatterns = [
    # Authentication endpoints
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/logout/', LogoutView.as_view(), name='logout'),    
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('leave-requests/', LeaveRequestListCreateView.as_view(), name='leave-request-list-create'),
    path('leave-requests/<int:pk>/', LeaveRequestDetailView.as_view(), name='leave-request-detail'),

    path('payrolls/', PayrollListCreateView.as_view(), name='payroll-list-create'),
    path('payrolls/<int:pk>/', PayrollDetailView.as_view(), name='payroll-detail'),

    path('documents/', HRDocumentListCreateView.as_view(), name='hr-document-list-create'),
    path('documents/<int:pk>/', HRDocumentDetailView.as_view(), name='hr-document-detail'),

    path('admin/', AdminLoginView.as_view(), name='admin-login'),
    
    path('', include(router.urls)),
    
]
