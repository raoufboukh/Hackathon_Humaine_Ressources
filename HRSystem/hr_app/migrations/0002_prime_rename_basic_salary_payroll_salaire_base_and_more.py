# Generated by Django 5.1.4 on 2024-12-10 08:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('montant', models.DecimalField(decimal_places=2, max_digits=10)),
                ('imposable', models.BooleanField()),
                ('cotisable', models.BooleanField()),
            ],
        ),
        migrations.RenameField(
            model_name='payroll',
            old_name='basic_salary',
            new_name='salaire_base',
        ),
        migrations.RemoveField(
            model_name='payroll',
            name='bonuses',
        ),
        migrations.RemoveField(
            model_name='payroll',
            name='deductions',
        ),
        migrations.AlterField(
            model_name='payroll',
            name='net_salary',
            field=models.DecimalField(decimal_places=2, default=0, editable=False, max_digits=10),
        ),
        migrations.AddField(
            model_name='payroll',
            name='primes',
            field=models.ManyToManyField(blank=True, to='hr_app.prime'),
        ),
    ]
