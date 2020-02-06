from django.urls import path, include
from . import views

urlpatterns = [
	path('login/', views.login, name="Login"),
	path('authlogin/', views.handle_login_data, name="Handle Login Data"),
]