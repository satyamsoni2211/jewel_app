from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^checkUserName/$',checkUserName),
    url(r'^signUp/$',signUp),
    url(r'^login/$',Login),
]