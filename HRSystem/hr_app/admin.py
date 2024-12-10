from django.contrib import admin
from django.utils.html import format_html
from .models import LeaveRequest, Payroll, HRDocument, Prime
from django.contrib.admin import ModelAdmin


@admin.register(Prime)
class PrimeAdmin(ModelAdmin):
    list_display = ('nom', 'montant', 'imposable', 'cotisable')
    list_filter = ('imposable', 'cotisable')
    search_fields = ('nom',)
    ordering = ('nom',)

class PrimeInLine(admin.TabularInline):
    model = Payroll.primes.through
    extra = 1

@admin.register(LeaveRequest)
class LeaveRequestAdmin(ModelAdmin):
    list_display = ('user', 'start_date', 'end_date', 'status', 'duration_days')
    list_filter = ('status', 'start_date')
    search_fields = ('user__username', 'status')
    ordering = ('-start_date',)
    date_hierarchy = 'start_date'
    
    def duration_days(self, obj):
        return (obj.end_date - obj.start_date).days + 1
    duration_days.short_description = 'Duration (days)'


@admin.register(Payroll)
class PayrollAdmin(ModelAdmin):
    list_display = ('user', 'salaire_base', 'total_primes', 'net_salary', 'payment_status')
    list_filter = ('user', 'created_at')
    search_fields = ('user__username',)
    readonly_fields = ('net_salary',)
    inlines = [PrimeInLine]
    exclude = ('primes',)
    
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