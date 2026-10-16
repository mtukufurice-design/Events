from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from .serializers import AccountSerializer, LoginSerializer, SignupSerializer


def auth_response(user, response_status=status.HTTP_200_OK):
	token, _ = Token.objects.get_or_create(user=user)
	return Response(
		{'token': token.key, 'user': AccountSerializer(user).data},
		status=response_status,
	)


@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
def signup(request):
	serializer = SignupSerializer(data=request.data)
	serializer.is_valid(raise_exception=True)
	return auth_response(serializer.save(), status.HTTP_201_CREATED)


@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
def login_view(request):
	serializer = LoginSerializer(data=request.data, context={'request': request})
	serializer.is_valid(raise_exception=True)
	return auth_response(serializer.validated_data['user'])


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
	if isinstance(request.auth, Token):
		request.auth.delete()
	return Response(status=status.HTTP_204_NO_CONTENT)
