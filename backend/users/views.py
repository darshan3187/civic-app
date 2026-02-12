from rest_framework import generics, permissions
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RegisterSerializer, UserSerializer

User = get_user_model()


# 1️⃣ Register (Anyone can register as CITIZEN)
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


# 2️⃣ Get Logged-in User Profile
class ProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


# 3️⃣ Admin-only: List All Users
class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]
