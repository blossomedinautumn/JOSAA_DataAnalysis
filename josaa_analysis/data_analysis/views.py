from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .models import SeatAllotment


# Create your views here.


def home(request):
    return render(request, 'data_analysis/home.html')

def about(request):
    return render(request, 'data_analysis/about.html')

    #data = SeatAllotment.objects.all().values()
    #return JsonResponse(list(data), safe=False)
    
def inst_wise(request):
    return render(request, 'data_analysis/inst_wise.html')

def round_analysis(request):
    return render(request, 'data_analysis/rounds.html')  

def each_inst(request):
    return render(request, 'data_analysis/each_inst.html') 

def branch(request):
    return render(request, 'data_analysis/branch.html')

def iits_preferred(request):
    return render(request, 'data_analysis/iits_preferred.html')

def cse(request):
    return render(request, 'data_analysis/cse.html')

def popular_branch(request):
    return render(request, 'data_analysis/popular_branch.html')




def contact(request):
    return render(request, 'data_analysis/contact.html')

def copyright(request):
    return render(request, 'data_analysis/copyright.html') 

def help(request):
    return render(request, 'data_analysis/help.html')

def hyperlink(request):
    return render(request, 'data_analysis/hyperlink.html')

def privacy(request):
    return render(request, 'data_analysis/privacy.html')

def terms_conditions(request):
    return render(request, 'data_analysis/terms_conditions.html')
                      

def opening_closing(request):
    return render(request, 'data_analysis/opening_closing.html')                       
