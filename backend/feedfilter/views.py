
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import (
    login as auth_login, logout as auth_logout
)
from django.http import JsonResponse
from django.http import HttpResponse


def register(request):
    name = request.POST.get('username', '')
    password = request.POST.get('password', '')
    mail_id = request.POST.get('email', '')
    first_name = request.POST.get('first', '')
    last_name = request.POST.get('last', '')
    if User.objects.filter(username=name).count() == 0:
        user = User.objects.create_user(username=name, password=password, email=mail_id, first_name=first_name,
                                        last_name=last_name)
        user.save()
        return JsonResponse({'answer': "yes"})
    return JsonResponse({'answer': "No"})


def login(request):
    name = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = authenticate(request, username=name, password=password)
    if user is not None:
        auth_login(request, user)
        # Redirect to next page
        return JsonResponse({'answer': "success"})
    else:
        # Redirect to login page again
        return JsonResponse({'answer': "unsuccessful attempt"})


def logout(request):
    auth_logout(request)
    # Redirect to login page
    return JsonResponse({'answer': "logged out"})


def check_authentication(request):
    # name = request.POST.get('username', '')
    # user = authenticate(request, username=name)
    if request.user.is_authenticated is not None:
        return JsonResponse({'status': 1, 'answer': "success"})
    else:
        return JsonResponse({'status': 1, 'answer': "unsuccessful attempt"})


def receive_post(request):
    posts_string = request.POST.get('posts_string', '')
    return HttpResponse(posts_string)
