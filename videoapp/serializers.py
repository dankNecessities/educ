from .models import Video
from django.contrib.auth.models import User
from rest_framework import serializers

class VideoSerializer(serializers.ModelSerializer):

	class Meta:
		model = Video
		fields = '__all__'

class LoginSerializer(serializers.ModelSerializer):

	class Meta:
		model  = User
		fields = ['username', 'password']