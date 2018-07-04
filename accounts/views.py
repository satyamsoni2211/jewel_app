# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import UserProfile
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from .generics import getImage
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from django.conf import settings
from  django.urls import reverse_lazy,reverse
from django.contrib import messages

# Create your views here.


@csrf_exempt
def checkUserName(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        user = UserProfile.objects.filter(username=username)
        if user.exists():
            return JsonResponse({'username': 0})
        else:
            return JsonResponse({'username': 1})


@csrf_exempt
def signUp(request):
    if request.method == 'POST':
        data = {
            'username': request.POST.get('username'),
            'email': request.POST.get('email'),
            'contact': request.POST.get('contact'),
            'adress': request.POST.get('adress')
        }
        password = request.POST.get('password')
        image, filename = getImage(request.POST.get('pic'))
        user = UserProfile(**data)
        user.set_password(password)
        user.profilePic.save(filename, image, save=True)
        user.save()
        welcome = 'Welcome to Jewel App'
        msg = EmailMultiAlternatives(welcome, welcome, 'developers@jewel_app.com', [
                                     request.POST.get('email'), ])
        msg.send()
        return JsonResponse({'details': 'User created successfully'})


@csrf_exempt
def Login(request):

    if request.method == 'POST':
        data = {
            'username': request.POST.get('username'),
            'password': request.POST.get('password')
        }
        user = authenticate(**data)
        if user is not None:
            if user.is_active:
                login(request, user)
                # Redirect to index page.
                return redirect(settings.LOGIN_REDIRECT_URL)
        else:
            messages.error(request,'Invalid username or password')
            return  redirect('home')
        # if user is not None:
        #     print 'Logged in successfully'
        #     login(request, user)
        #     return redirect(settings.LOGIN_REDIRECT_URL)
        # else:
        #     return JsonResponse({'details':'Invalid username/password'})
