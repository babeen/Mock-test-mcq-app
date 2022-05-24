from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.core import serializers
# Create your views here.


def hello(request):
    return render(request, 'home.html')


def home(request):
    return render(request, 'index.html')


def signup(request):
    return render(request, 'signup.html')


def signin(request):
    return render(request, 'signin.html')


def signout(request):
    pass


def my_questions(request):
    # return HttpResponse('Hello Question')
    all_questions = MaEutaQuestionHo.objects.all()
    # return HttpResponse(questions)
    q_Json = serializers.serialize('json', all_questions)
    # return JsonResponse(myJson)
    return HttpResponse(q_Json, 'application/json')


def my_answers(request):
    all_answers = MaAnsewersHo.objects.all()
    a_Json = serializers.serialize('json', all_answers)
    return HttpResponse(a_Json, 'application/json')
