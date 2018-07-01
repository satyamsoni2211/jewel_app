from django.conf.urls import url
from .views import checkUserName

urlpatterns = [
    url(r'^checkUserName/$',checkUserName),
]