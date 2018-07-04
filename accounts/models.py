# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

# Create your models here.


class UserProfile(User):
    adress = models.TextField(max_length=100)
    profilePic = models.ImageField(upload_to='images/%Y%m%d/')
    contact = models.CharField(max_length=13,
                validators=[RegexValidator(regex=r'^\+{0,1}\d{10,12}', 
                message='Phone number must have 12 digits including country code')])
    gender = models.CharField(max_length=1)

    def __str__(self):
        return self.username
