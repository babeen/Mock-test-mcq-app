from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello),
    path('home/', views.home),
    path('mcq-questions/', views.my_questions),
    path('mcq-answers/', views.my_answers),
    path('signup/', views.signup),
    path('signin/', views.signin),
    path('signout/', views.signout),
    path('submitscore/<int:score>/', views.submitscore),
]
