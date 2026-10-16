from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
	path('api/signup/', views.signup, name='signup'),
	path('api/login/', views.login_view, name='login'),
	path('api/logout/', views.logout_view, name='logout'),
]