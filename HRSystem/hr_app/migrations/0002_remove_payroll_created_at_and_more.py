# Generated by Django 5.1.4 on 2024-12-10 22:10

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr_app', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='payroll',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='payroll',
            name='payment_date',
        ),
        migrations.RemoveField(
            model_name='payroll',
            name='payment_status',
        ),
        migrations.RemoveField(
            model_name='payroll',
            name='updated_at',
        ),
        migrations.AlterField(
            model_name='payroll',
            name='overtime_rate',
            field=models.DecimalField(decimal_places=2, default=1.5, max_digits=5),
        ),
        migrations.AlterField(
            model_name='performancereview',
            name='employee',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
