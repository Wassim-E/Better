from django.contrib import admin
from django.urls import path
from .views import TestCall

urlpatterns = [
    path('testcall/', TestCall.as_view(), name='testcall'),
]