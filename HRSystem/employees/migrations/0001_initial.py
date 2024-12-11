# Generated by Django 5.1.4 on 2024-12-11 04:17

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('description', models.TextField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='LeaveType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('days_allowed', models.PositiveIntegerField()),
                ('requires_approval', models.BooleanField(default=True)),
                ('is_paid', models.BooleanField(default=False)),
                ('is_cnas_covered', models.BooleanField(default=False)),
                ('description', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clock_in', models.DateTimeField()),
                ('clock_out', models.DateTimeField(blank=True, null=True)),
                ('status', models.CharField(choices=[('present', 'Present'), ('absent', 'Absent'), ('late', 'Late'), ('half_day', 'Half Day')], default='present', max_length=20)),
                ('notes', models.TextField(blank=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee_id', models.CharField(max_length=10, unique=True)),
                ('date_of_birth', models.DateField()),
                ('phone_number', models.CharField(max_length=15)),
                ('address', models.TextField()),
                ('hire_date', models.DateField()),
                ('employment_status', models.CharField(choices=[('active', 'Active'), ('on_leave', 'On Leave'), ('terminated', 'Terminated')], default='active', max_length=20)),
                ('base_salary', models.DecimalField(decimal_places=2, default=0.0, max_digits=10, null=True)),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='employees.department')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='LeaveRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('reason', models.TextField()),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')], default='pending', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('approved_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='approved_leaves', to=settings.AUTH_USER_MODEL)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='employee_leaves_requests', to='employees.employee')),
                ('leave_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employees.leavetype')),
            ],
        ),
        migrations.CreateModel(
            name='Performance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review_period_start', models.DateField()),
                ('review_period_end', models.DateField()),
                ('performance_score', models.DecimalField(decimal_places=2, max_digits=3)),
                ('comments', models.TextField()),
                ('goals_achieved', models.TextField()),
                ('areas_of_improvement', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employees.employee')),
                ('reviewer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='employee_reviews_given', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Position',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('salary_range_min', models.DecimalField(decimal_places=2, max_digits=10)),
                ('salary_range_max', models.DecimalField(decimal_places=2, max_digits=10)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employees.department')),
            ],
        ),
        migrations.AddField(
            model_name='employee',
            name='position',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='employees.position'),
        ),
    ]
