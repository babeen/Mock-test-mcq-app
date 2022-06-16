# Mock-test-mcq-app

## Step 1: First check git is install or not.
` git --version `
## Step 2: If not install goto https://git-scm.com/downloads for installation.
## Step 3: Fork this repository.
## Step 4: To run the repository in your IDE. You need to do clone.
` git clone '<url>' `
## step 5 : To run server 
` python manage.py runserver ` // locally run

# Creating Models
1. ` models.py:` Write code with classname, fields and attributes
2. `admin.py:` Resigter your classname in the file.
3. Run `python manage.py makemigrations`
4. Run `python manage.py migrate`

## method
`setInterval(function(),1000)`
* It changes the any DOM value by interval(i.e 1000) until the clearInterval value.Documentation of the working project - Mock Test Prep. App

Installation:First of all, we need to install python and to use the Django framework. We need to install the django in the following project directory with the pip package manager. We need to run the following command, ‘ django-admin startproject <project name>’

Start Projects: The above instruction will create the project folders and necessary django files and folders by itself. To ensure the django is installed locally or not, we need to run command ‘python -m django —version’

Why we need Django app?:To communicate with django admin and models we need the django app. To install the app we need to run following command inside the main project folder. ‘django-admin startapp <app name>’

Urls.py: In the file, we need to add the url patterns. Python code for  mapping between URL path expressions to Python functions (your views that we will talk in the next point). We need to create the variable exactly as below and create an array by adding big brackets and inside those add the path that should be imported. The main argument path method takes is path(‘<path name>/’, views.function-name) . Only does giving and communicating with the path to do the functions.

		from django.urls import path

		urlpatterns = [
			path(‘ ’, views.hello),
			path(‘home/’, views.home)	
				:
			]
Views.py: This file has the all the functions pointed in the urls.py file in the urlpatterns and inside the path(‘ ’, views.hello) method. Where the hello function takes an argument request and takes the reference  of the url-path (for eg: ‘home/’), the return is the function keyword that outputs the function logic and render(request, ‘home.html’) method displays the following home.html in the <home/> path. 
		
                  	def  hello(request):
			return render(request, ’home.html’ )

Templates: This is the required folder in the project app (folder structure) which consists out html files. [ <app-name>/templates/index.html ]

Static : This specific folder is used for adding the external css and js.

Authentication: Basically, we need to create the signin, signup and signout pages.
1.  First, lets understand about the signup code in the views.py file.
In templates folder, we created the signup.html file and inside that markup file there is the code to create the form for user registration. Below the form’s action attribute maps the browser url-path as 127.0.0.1:8000/signup  and the method is post when the form is submitted.

<form action=”/signup/” method=”post”>
:
     </form>

From action attribute defines what should happen to data when a form is submitted on a web page. So, that will be handled by the django at the urls.py path() method and  goes to the functions in the views.py. Stores the user info. Into the database of django admin. So how the data is stored in the database then. That will be the next topic. 

models.py : In this file, designing database tables with the proper validation.

To display the object name i.e. table name we need to add the following python code.
	def  __str__(self):
		return self.<classname/tablename>
Table relationship with the foreign key. Similar qualities of the table.
	class MaAnswerHo(models.Model):
			:
		belongs_to = models.ForeignKey(MaEutaQuestionHo, on_delete=models.CASCADE, default=1)

	
 Django-Admin: To create the django-admin, firstly we need to know what is the use case of that. Django-Admin is used for applying the authentication and authorization as  we discussed above briefly. To create that we just need to run the command ‘python manage.py createsuperuser’ and follow along the process.

To migrate the models.py file in the django-admin. Just add these code inside the admin.py file.

from  django.contrib import admin
from  .models import *

admin.site.register(<classname created in the models.py>)
                :

Now, we can appy the migrations command. First the command will be,
‘python mange.py makemigrations’. After applying this command the migrations python files are created with the unique number and composition of class name in the migrations folder of the same directory.
Then, we have to run the ‘python manage.py migrate’ for displaying the object/table name.

