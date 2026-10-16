from django.test import TestCase
from django.contrib.auth import get_user_model

from .serializers import AccountSerializer, LoginSerializer


class LoginSerializerTests(TestCase):
	def test_superuser_can_log_in_with_username_without_email(self):
		user_model = get_user_model()
		user_model.objects.create_superuser(
			username='siteadmin',
			email='',
			password='test-password-123',
		)

		serializer = LoginSerializer(data={
			'identifier': 'siteadmin',
			'password': 'test-password-123',
		})

		self.assertTrue(serializer.is_valid(), serializer.errors)
		account = AccountSerializer(serializer.validated_data['user']).data
		self.assertTrue(account['is_superuser'])
		self.assertEqual(account['role'], 'admin')

	def test_superuser_can_log_in_with_legacy_email_field(self):
		user_model = get_user_model()
		user_model.objects.create_superuser(
			username='siteadmin',
			email='admin@example.com',
			password='test-password-123',
		)

		serializer = LoginSerializer(data={
			'email': 'admin@example.com',
			'password': 'test-password-123',
		})

		self.assertTrue(serializer.is_valid(), serializer.errors)
		self.assertTrue(serializer.validated_data['user'].is_superuser)
