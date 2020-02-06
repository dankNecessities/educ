from django.shortcuts import render
from django.shortcuts import render, loader
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth import authenticate

# Create your views here.
def login(request):
	template = loader.get_template('login.html')
	context = {'':''}
	return HttpResponse(template.render(context, request))

@require_http_methods(["POST"])
def handle_login_data(request):

	if request.method == 'POST':
		form = LoginForm(request.POST)

		if form.is_valid():
			print('VALID')
			if (authenticate(username=request.POST['username'], password=request.POST['password'])):
				print(request.POST['username'])
			else:
				print('NOT AUTHENTICATED')
				return HttpResponseRedirect('/videoapp/')