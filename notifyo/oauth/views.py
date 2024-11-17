import logging
from sqlite3 import IntegrityError
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework import serializers
from rest_framework.response import Response
from .services import create_new_user, retrieve_user_token
from django.contrib.auth.models import User
from rest_framework import status

logger = logging.getLogger(__name__)


class CreateNewUserView(CreateAPIView):
    class InputSerializer(serializers.Serializer):
        username = serializers.CharField(max_length=12)
        password = serializers.CharField(max_length=30)

    class ResponseSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ["pk", "username"]

    def post(self, request, *args, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            user_obj = create_new_user(
                serializer.validated_data["username"],
                serializer.validated_data["password"],
            )
            response = self.ResponseSerializer(user_obj)

            return Response(
                data={"message": "Registered successfully", "user": response.data},
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response(
                exception=True,
                data={"error": "Username is already registered", "type": e.args},
                status=status.HTTP_400_BAD_REQUEST,
            )


class RetrieveTokenView(GenericAPIView):
    class InputSerializer(serializers.Serializer):
        username = serializers.CharField(max_length=12)
        password = serializers.CharField(max_length=30)

    def post(self, request, *args, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        token = retrieve_user_token(
            serializer.validated_data["username"],
            serializer.validated_data["password"],
        )
        
        return Response(
            data={"token": "token"},
            status=status.HTTP_200_OK,
        )
