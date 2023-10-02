from django.shortcuts import render
from .models import COUNT_TB

def index_view(request):
    
    if request.method == 'POST':

        try:
            COUNT_TB.objects.get()
        except:
            first_row = COUNT_TB()
            first_row.save()
        else:
            update_row = COUNT_TB.objects.get()
            update_row.count_num += 1
            update_row.save()
    return render(request, 'mtvtest/index.html')