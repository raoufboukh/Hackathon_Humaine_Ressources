from rest_framework import generics , viewsets
from rest_framework.permissions import AllowAny
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .models import LeaveRequest, Payroll, HRDocument , Prime
from .Serializers import LeaveRequestSerializer, PayrollSerializer, HRDocumentSerializer , PrimeSerializer
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated

# Leave Request Views
class LeaveRequestListCreateView(generics.ListCreateAPIView):
    queryset = LeaveRequest.objects.all()
    serializer_class = LeaveRequestSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class PayrollViewSet(viewsets.ModelViewSet):
    queryset = Payroll.objects.all()
    serializer_class = PayrollSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Payroll.objects.all()
        else:
            return Payroll.objects.filter(user=user)

class PrimeViewSet(viewsets.ModelViewSet):
    queryset = Prime.objects.all()
    serializer_class = PrimeSerializer
    permission_classes = [IsAuthenticated]
class LeaveRequestDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = LeaveRequest.objects.all()
    serializer_class = LeaveRequestSerializer
    permission_classes = [AllowAny]

# Payroll Views
class PayrollListCreateView(generics.ListCreateAPIView):
    queryset = Payroll.objects.all()
    serializer_class = PayrollSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class PayrollDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Payroll.objects.all()
    serializer_class = PayrollSerializer
    permission_classes = [AllowAny]

# HR Document Views
class HRDocumentListCreateView(generics.ListCreateAPIView):
    queryset = HRDocument.objects.all()
    serializer_class = HRDocumentSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class HRDocumentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HRDocument.objects.all()
    serializer_class = HRDocumentSerializer
    permission_classes = [AllowAny]
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from django.contrib.auth import authenticate

class LoginView(APIView):
    permission_classes = [AllowAny]  # Allow all users to access the login endpoint

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "user_id": user.id, "username": user.username}, status=HTTP_200_OK)

        return Response({"error": "Invalid credentials"}, status=HTTP_400_BAD_REQUEST)

from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Delete the token associated with the user
        request.user.auth_token.delete()
        return Response({"message": "Logged out successfully"}, status=HTTP_200_OK)
