# Generated by Django 5.1.4 on 2024-12-10 08:55

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr_app', '0002_prime_rename_basic_salary_payroll_salaire_base_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='payroll',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]