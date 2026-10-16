from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers

from .models import AccountProfile

User = get_user_model()


class AccountSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    role = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'email', 'full_name', 'is_superuser', 'role')
        read_only_fields = fields

    def get_full_name(self, user):
        try:
            return user.profile.full_name
        except AccountProfile.DoesNotExist:
            return user.get_full_name() or user.get_username()

    def get_role(self, user):
        return 'admin' if user.is_superuser else 'user'


class SignupSerializer(serializers.Serializer):
    full_name = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    password = serializers.CharField(min_length=8, write_only=True, trim_whitespace=False)

    def validate_email(self, email):
        email = email.strip().lower()
        if User.objects.filter(email__iexact=email).exists():
            raise serializers.ValidationError('An account with this email already exists.')
        return email

    def create(self, validated_data):
        email = validated_data['email']
        user = User.objects.create_user(
            username=email,
            email=email,
            first_name=validated_data['full_name'],
            password=validated_data['password'],
        )
        AccountProfile.objects.create(user=user, full_name=validated_data['full_name'])
        return user


class LoginSerializer(serializers.Serializer):
    identifier = serializers.CharField(max_length=254, required=False, trim_whitespace=True)
    email = serializers.CharField(max_length=254, required=False, trim_whitespace=True)
    password = serializers.CharField(write_only=True, trim_whitespace=False)

    def validate(self, attrs):
        identifier = (attrs.get('identifier') or attrs.get('email') or '').strip()
        if not identifier:
            raise serializers.ValidationError({'detail': 'Enter your email address or username.'})
        user = User.objects.filter(email__iexact=identifier).first()
        if user is None:
            user = User.objects.filter(username__iexact=identifier).first()
        if user is None:
            raise serializers.ValidationError({'detail': 'Email or password is incorrect.'})

        authenticated_user = authenticate(
            request=self.context.get('request'),
            username=user.get_username(),
            password=attrs['password'],
        )
        if authenticated_user is None:
            raise serializers.ValidationError({'detail': 'Email or password is incorrect.'})

        attrs['user'] = authenticated_user
        return attrs