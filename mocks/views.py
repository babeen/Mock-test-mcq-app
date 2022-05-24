from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from django.core import serializers
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login
# Create your views here.


def hello(request):
    return render(request, 'home.html')


def home(request):
    return render(request, 'index.html')


def signup(request):
    if request.method == "POST":
        username = request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']

        myuser = User.objects.create_user(username, email, pass1)
        myuser.first_name = fname
        myuser.last_name = lname

        myuser.save()
        messages.success(request, 'Your account is successfully signed up.')

        return redirect('/signin/')
    return render(request, 'signup.html')


def signin(request):
    if request.method == "POST":
        username = request.POST["username"]
        pass1 = request.POST["pass1"]

        user = authenticate(username=username, password=pass1)
        if user is not None:
            login(request, user)
            fname = user.first_name
            # return render(request, "index.html", {'fname': fname})
            return redirect('/home/')
        else:
            messages.error(request, "Bad Credentials.")
            return redirect('/')
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
