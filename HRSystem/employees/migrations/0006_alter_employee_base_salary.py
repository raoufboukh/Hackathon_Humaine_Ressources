# Generated by Django 5.1.4 on 2024-12-11 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0005_alter_employee_address_alter_employee_date_of_birth_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='base_salary',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
    ]