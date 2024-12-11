# Generated by Django 5.1.4 on 2024-12-11 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='date_of_birth',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='hire_date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='phone_number',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]