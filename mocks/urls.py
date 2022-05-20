from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello),
    path('home/', views.home),
    path('mcq-questions/', views.my_questions),
    path('mcq-answers/', views.my_answers)
]
