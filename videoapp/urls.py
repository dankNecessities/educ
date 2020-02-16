from django.urls import path, include
from . import views
from .views import VideoViewSet, LoginViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'videos', VideoViewSet, basename='version')
router.register(r'authenticate', LoginViewSet, basename='authenticate')
urlpatterns = router.urls

urlpatterns += [
	path('login/', views.login, name="Login"),
	#path('authenticate/', views.handle_login_data, name="Handle Login Data"),
]