from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('news', index),
    path('about', index),
    path('contact', index),
]
