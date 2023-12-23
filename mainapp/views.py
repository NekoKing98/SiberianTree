from django.shortcuts import render
from django.template.loader import get_template
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def index(request):
    return render(request, 'mainapp/index.html')


@csrf_exempt
def change_template(request):
    if request.method == 'POST':
        link_name = request.POST.get('link_name')
        if link_name == 'topol':
            template = get_template('mainapp/topol.html')
        html = template.render()
        return HttpResponse(html)
    elif request.method == 'GET':
        return HttpResponse("GET requests are not allowed", status=405)
    else:
        return HttpResponse("Method not allowed", status=405)