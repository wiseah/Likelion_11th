from django.urls import path
from . import views

app_name = 'mtvtest'

urlpatterns = [
    path('', views.index_view),
]