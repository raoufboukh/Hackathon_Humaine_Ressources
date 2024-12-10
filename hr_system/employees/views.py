from rest_framework import viewsets, status, generics, mixins
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist
from .models import User
from .serializers import UserSerializer

# User Login View
@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        user = None
        if '@' in username:
            try:
                user = User.objects.get(email=username)
            except ObjectDoesNotExist:
                pass

        if not user:
            user = authenticate(username=username, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            serializer = UserSerializer(user)
            profile_picture_url = serializer.data.get('profile_picture', None)
            username = serializer.data.get('username', None)
            user_role = serializer.data.get('Role', None)

            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'message': 'successful login',
                'profile_picture': profile_picture_url,
                'username': username,
                'user_role': user_role,
            }, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)