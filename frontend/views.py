from django.shortcuts import render, loader
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required(login_url='login/')
def index(request):
	template = loader.get_template('index.html')
	context = {'':''}
	return HttpResponse(template.render(context, request))