from .models import COUNT_TB
from django.contrib import admin

class CountAdmin(admin.ModelAdmin):
    list_display = (
        'count_num',
        )

admin.site.register(COUNT_TB, CountAdmin)