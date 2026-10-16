from django.conf import settings
from django.db import models


class AccountProfile(models.Model):
	user = models.OneToOneField(
		settings.AUTH_USER_MODEL,
		on_delete=models.CASCADE,
		related_name='profile',
	)
	full_name = models.CharField(max_length=150)
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.full_name
