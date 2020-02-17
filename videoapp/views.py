from django.shortcuts import render
from django.shortcuts import render, loader
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.http import require_http_methods
from django.contrib.auth import authenticate, logout, login
from django.contrib.auth.models import User
from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from .serializers import VideoSerializer, LoginSerializer
from .models import Video

class VideoViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.ListModelMixin):

	queryset = Video.objects.all()
	serializer_class = VideoSerializer
	permission_classes = ['IsAuthenticated']

	def list(self, request):
		serializer = VideoSerializer(self.queryset, many=True)
		return Response(serializer.data)

	def create(self, request):
		serializer = self.serializer_class(data=request.data)

		if serializer.is_valid():
			
			Video.objects.create(**serializer.validated_data)
			return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

		return Response({
				'status': 'Bad Request',
				'message': 'Could not upload audio'
			}, status=status.HTTP_400_BAD_REQUEST)

class LoginViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
	"""Viewset for Logging in"""

	queryset = User.objects.all()
	serializer_class = LoginSerializer
	permission_classes = []

	def create(self, request):
		serializer = self.serializer_class(data=request.data)

		if 'password' and 'username' in request.POST:
			user = authenticate(username=request.POST['username'], password=request.POST['password'])			
			if user is not None and user.is_active:
				login(request, user)
				template = loader.get_template('frontend/index.html')
				context = {'':''}
				return HttpResponse(template.render(context, request))
				#return HttpResponseRedirect('/')
			else:
				template = loader.get_template('login.html')
				context = {'error':'Username or password incorrect'}
				return HttpResponse(template.render(context, request))
				#return Response({
				#'status': 'Bad Request',
				#'message': 'Could not authenticate'
				#}, status=status.HTTP_400_BAD_REQUEST)	
		else:
			return Response({
				'status': 'Bad Request',
				'message': 'Check login fields'
			}, status=status.HTTP_400_BAD_REQUEST)

class LogoutViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
	"""Viewset for logging out"""

	queryset = User.objects.all()
	serializer_class = LoginSerializer

	def list(self, request):
		logout(request)
		print('LOGGED OUT')
		template = loader.get_template('login.html')
		context = {'':''}
		return HttpResponse(template.render(context, request))


# Create your views here.
def login_user(request):
	template = loader.get_template('login.html')
	context = {'':''}
	return HttpResponse(template.render(context, request))
