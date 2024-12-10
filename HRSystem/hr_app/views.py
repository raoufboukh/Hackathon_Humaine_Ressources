from rest_framework import generics , viewsets
from rest_framework.permissions import AllowAny
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .models import LeaveRequest, Payroll, HRDocument , Prime
from .Serializers import LeaveRequestSerializer, PayrollSerializer, HRDocumentSerializer , PrimeSerializer
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

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
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        
        # Afficher les données reçues pour le débogage
        print(f"Username: {username}, Password: {password}")

        if not username or not password:
            return Response(
                {"error": "Username and password are required"},
                status=HTTP_400_BAD_REQUEST,
            )

        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response(
                {
                    "token": token.key,
                    "user_id": user.id,
                    "username": user.username,
                },
                status=HTTP_200_OK,
            )

        return Response({"error": "Invalid credentials"}, status=HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Delete the token associated with the user
        request.user.auth_token.delete()
        return Response({"message": "Logged out successfully"}, status=HTTP_200_OK)



class AdminLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("user")
        password = request.data.get("pass")

        user = authenticate(username=username, password=password)
        if user and user.is_staff:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "token": token.key,
                "user_id": user.id,
                "username": user.username
            }, status=HTTP_200_OK)

        return Response({"error": "Invalid credentials"}, status=HTTP_400_BAD_REQUEST)


@csrf_exempt
def login_view(request):
    if request.method == 'OPTIONS':
        response = JsonResponse({'message': 'CORS preflight success'})
        response['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        response['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response['Access-Control-Allow-Headers'] = 'Content-Type'
        return response
    
    if request.method == 'POST':
        import json
        data = json.loads(request.body)
        username = data.get('user')
        password = data.get('password')

        # Perform authentication logic
        from django.contrib.auth import authenticate, login
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'message': 'Invalid credentials'}, status=401)

    return JsonResponse({'message': 'Method not allowed'}, status=405)
