from django.contrib import admin
from django.utils.html import format_html
from .models import LeaveRequest, Payroll, HRDocument, PayrollPrime, Prime
from django.contrib.admin import ModelAdmin
from django.urls import path
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@admin.register(Prime)
class PrimeAdmin(admin.ModelAdmin):
    list_display = ('name', 'amount', 'taxable', 'contributable')
    list_filter = ('taxable', 'contributable')
    search_fields = ('name',)

class PrimeInLine(admin.TabularInline):
    model = PayrollPrime
    extra = 1

@admin.register(LeaveRequest)
class LeaveRequestAdmin(admin.ModelAdmin):
    list_display = ('employee', 'leave_type', 'start_date', 'end_date', 'status')  
    list_filter = ('status', 'leave_type')
    search_fields = ('user__username', 'user__first_name', 'user__last_name')
    date_hierarchy = 'start_date'
    
    def duration_days(self, obj):
        return (obj.end_date - obj.start_date).days + 1
    duration_days.short_description = 'Duration (days)'


@admin.register(Payroll)
class PayrollAdmin(admin.ModelAdmin):
    list_display = ('employee', 'period_start', 'period_end', 'net_salary')
    readonly_fields = ('net_salary',)

    
    def total_primes(self, obj):
        return sum(prime.montant for prime in obj.primes.all())
    total_primes.short_description = 'Total Primes'
    
    def payment_status(self, obj):
        if obj.net_salary > 5000:
            color = 'green'
        else:
            color = 'orange'
        return format_html(
            '<span style="color: {};">{}</span>',
            color,
            f'{obj.net_salary} DZD'
        )
    payment_status.short_description = 'Payment Status'


@admin.register(HRDocument)
class HRDocumentAdmin(ModelAdmin):
    list_display = ('user', 'name', 'expiration_date', 'signed', 'status_tag')
    list_filter = ('signed', 'expiration_date')
    search_fields = ('name', 'user__username')
    date_hierarchy = 'expiration_date'
    
    def status_tag(self, obj):
        if obj.signed:
            color = 'green'
            status = '✓'
        else:
            color = 'red'
            status = '✗'
        return format_html(
            '<span style="color: {};">{}</span>',
            color,
            status
        )
    status_tag.short_description = 'Status'


@csrf_exempt
def primes_api(request):
    if request.method == 'GET':
        primes = Prime.objects.all().values()
        return JsonResponse(list(primes), safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        prime = Prime.objects.create(
            nom=data['nom'],
            montant=data['montant'],
            imposable=data['imposable'],
            cotisable=data['cotisable']
        )
        return JsonResponse({'id': prime.id, 'nom': prime.nom, 'montant': prime.montant, 'imposable': prime.imposable, 'cotisable': prime.cotisable})

urlpatterns = [
    path('api/primes/', primes_api),
]