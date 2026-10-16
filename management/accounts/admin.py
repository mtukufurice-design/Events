from django.contrib import admin
from .models import AccountProfile


@admin.register(AccountProfile)
class AccountProfileAdmin(admin.ModelAdmin):
	list_display = ('full_name', 'user', 'created_at')
	search_fields = ('full_name', 'user__email', 'user__username')
