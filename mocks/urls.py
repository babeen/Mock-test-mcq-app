from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello),
    path('mcq-questions/', views.my_questions),
    path('mcq-answers/', views.my_answers)
]
