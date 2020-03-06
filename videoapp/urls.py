from django.urls import path, include
from . import views
from .views import VideoViewSet, LoginViewSet, LogoutViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'videos', VideoViewSet, basename='version')
router.register(r'authenticate', LoginViewSet, basename='authenticate')
router.register(r'logout', LogoutViewSet, basename='logout')
urlpatterns = router.urls

urlpatterns += [
	path('login/', views.login_user, name="Login"),
    path('home/', views.home, name="home"),
	#path('authenticate/', views.handle_login_data, name="Handle Login Data"),
]