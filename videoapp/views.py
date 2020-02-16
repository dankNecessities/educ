from django.shortcuts import render
from django.shortcuts import render, loader
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from .serializers import VideoSerializer, LoginSerializer
from .models import Video

class VideoViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.ListModelMixin):

	queryset = Video.objects.all()
	serializer_class = VideoSerializer

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

# Create your views here.
def login(request):
	template = loader.get_template('login.html')
	context = {'':''}
	return HttpResponse(template.render(context, request))

class LoginViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
	"""Viewset for Logging in"""

	queryset = User.objects.all()
	serializer_class = LoginSerializer

	def create(self, request):
		serializer = self.serializer_class(data=request.data)

		if serializer.is_valid():
			user = authenticate(username=request.POST['username'], password=request.POST['password'])
			return HttpResponseRedirect('/')
		else:
			return Response({
				'status': 'Bad Request',
				'message': 'Could not authenticate'
			}, status=status.HTTP_400_BAD_REQUEST)

@require_http_methods(["POST"])
def handle_login_data(request):

	if request.method == 'POST':
		#form = LoginForm(request.POST)

		if form.is_valid():
			print('VALID')
			if (authenticate(username=request.POST['username'], password=request.POST['password'])):
				print(request.POST['username'])
			else:
				print('NOT AUTHENTICATED')
				return HttpResponseRedirect('/videoapp/')