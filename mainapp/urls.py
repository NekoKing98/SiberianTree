from django.urls import path

from . import views

urlpatterns = [path('', views.index, name="mainpage"),
path('change_template/', views.change_template, name='change_template'),

]
