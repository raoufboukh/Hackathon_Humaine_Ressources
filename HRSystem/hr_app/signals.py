from django.db.models.signals import post_save, m2m_changed
from django.dispatch import receiver
from django.utils import timezone

from .models import Document, LeaveRequest, Notification, Payroll

@receiver(post_save, sender=LeaveRequest)
def notify_leave_request(sender, instance, created, **kwargs):
    if created:
        Notification.objects.create(
            user=instance.backup_person,
            title='New Leave Request',
            message=f'{instance.user.get_full_name()} has requested leave',
            notification_type='leave',
            related_object_id=instance.id,
            related_object_type='LeaveRequest'
        )

@receiver(post_save, sender=Document)
def check_document_expiry(sender, instance, **kwargs):
    if instance.expiry_date and instance.expiry_date - timezone.now().date() <= timezone.timedelta(days=30):
        Notification.objects.create(
            user=instance.user,
            title='Document Expiring Soon',
            message=f'Your {instance.title} will expire on {instance.expiry_date}',
            notification_type='document',
            related_object_id=instance.id,
            related_object_type='Document'
            )
@receiver(m2m_changed, sender=Payroll.primes.through)
def update_payroll_net_salary(sender, instance, action, **kwargs):
    if action in ["post_add", "post_remove", "post_clear"]:
        instance.net_salary = instance.calculate_net_salary()
        instance.save()