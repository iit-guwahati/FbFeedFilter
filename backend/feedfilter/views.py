
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import (
    login as auth_login, logout as auth_logout
)
from django.http import JsonResponse

def register(request):
    name = request.POST.get('username', '')
    password = request.POST.get('password', '')
    mail_id = request.POST.get('email', '')
    firstname = request.POST.get('first', '')
    lastname = request.POST.get('last', '')
    if (User.objects.filter(username=name).count() == 0):
        user = User.objects.create_user(username=name, password=password, email=mail_id, first_name=firstname,
                                        last_name=lastname)
        user.save()
        return (JsonResponse({'answer': "yes"}))
    return (JsonResponse({'answer': "No"}))


def login(request):
    name = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = authenticate(request, username=name, password=password)
    if(user is not None):
        auth_login(request, user)
        #Redirect to next page
        return (JsonResponse({'answer': "success"}))
    else :
        #Redirect to login page again
        return (JsonResponse({'answer': "unsuccesful attempt"}))


def logout(request):
    auth_logout(request)
    #Redirect to login page
    return (JsonResponse({'answer': "logged out"}))
