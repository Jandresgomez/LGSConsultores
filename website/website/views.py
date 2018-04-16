from django.http import HttpResponse


def index(request):
    return HttpResponse("Welcome to the main website index. Alita es una puta")