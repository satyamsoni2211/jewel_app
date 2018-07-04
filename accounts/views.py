# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import UserProfile
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate

# Create your views here.

@csrf_exempt
def checkUserName(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        user = UserProfile.objects.filter(username=username)
        if user.exists():
            return JsonResponse({'username':0})
        else:
            return JsonResponse({'username':1}) 
