# Generated by Django 5.1.4 on 2024-12-11 04:18

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('employees', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CompanyPolicy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('pay_frequency', models.CharField(choices=[('hourly', 'Per Hour'), ('daily', 'Per Day'), ('monthly', 'Monthly Salary')], default='monthly', max_length=20)),
                ('overtime_calculation', models.CharField(choices=[('fixed', 'Fixed Rate'), ('progressive', 'Progressive Rate'), ('none', 'No Overtime')], default='fixed', max_length=20)),
                ('leave_policy', models.CharField(choices=[('standard', 'Standard Leave Policy'), ('flexible', 'Flexible Leave Policy'), ('custom', 'Custom Leave Policy')], default='standard', max_length=20)),
                ('tax_calculation_method', models.CharField(choices=[('standard', 'Standard Tax'), ('simplified', 'Simplified Tax'), ('custom', 'Custom Tax Rules')], default='standard', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='DocumentCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('required_for_onboarding', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='LeaveType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('days_allowed', models.PositiveIntegerField()),
                ('requires_approval', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='PayrollComponent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('type', models.CharField(choices=[('earning', 'Earning'), ('deduction', 'Deduction')], max_length=20)),
                ('is_taxable', models.BooleanField(default=True)),
                ('is_fixed', models.BooleanField(default=True)),
                ('calculation_method', models.CharField(choices=[('fixed', 'Fixed Amount'), ('percentage', 'Percentage of Base'), ('formula', 'Custom Formula')], default='fixed', max_length=20)),
                ('calculation_formula', models.TextField(blank=True, help_text='Python expression for custom calculations', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Prime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('taxable', models.BooleanField(default=True)),
                ('contributable', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clock_in', models.DateTimeField()),
                ('clock_out', models.DateTimeField(blank=True, null=True)),
                ('status', models.CharField(choices=[('present', 'Present'), ('absent', 'Absent'), ('late', 'Late')], default='present', max_length=20)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employees.employee')),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('file', models.FileField(upload_to='employee_documents/')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
                ('expiry_date', models.DateField(blank=True, null=True)),
                ('is_verified', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('verified_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='verified_documents', to=settings.AUTH_USER_MODEL)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='hr_app.documentcategory')),
            ],
        ),
        migrations.CreateModel(
            name='HRDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('file', models.FileField(upload_to='documents/')),
                ('expiration_date', models.DateField(blank=True, null=True)),
                ('signed', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
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
                ('attachment', models.FileField(blank=True, null=True, upload_to='leave_attachments/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('backup_person', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='covering_leaves', to=settings.AUTH_USER_MODEL)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='employee_leave_requests', to='employees.employee')),
                ('leave_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr_app.leavetype')),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('message', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('read_at', models.DateTimeField(blank=True, null=True)),
                ('notification_type', models.CharField(choices=[('leave', 'Leave Request'), ('document', 'Document'), ('payroll', 'Payroll'), ('performance', 'Performance Review')], max_length=20)),
                ('related_object_id', models.PositiveIntegerField()),
                ('related_object_type', models.CharField(max_length=100)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Payroll',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('period_start', models.DateField()),
                ('period_end', models.DateField()),
                ('base_salary', models.DecimalField(decimal_places=2, max_digits=10)),
                ('net_salary', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('work_units', models.DecimalField(decimal_places=2, help_text='Hours or Days based on policy', max_digits=10)),
                ('unit_rate', models.DecimalField(decimal_places=2, help_text='Rate per hour/day based on policy', max_digits=10)),
                ('company_policy', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='hr_app.companypolicy')),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='payrolls', to='employees.employee')),
            ],
        ),
        migrations.CreateModel(
            name='PerformanceReview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('period_start', models.DateField()),
                ('period_end', models.DateField()),
                ('overall_rating', models.DecimalField(decimal_places=2, max_digits=3)),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('submitted', 'Submitted'), ('acknowledged', 'Acknowledged')], default='draft', max_length=20)),
                ('submitted_at', models.DateTimeField(blank=True, null=True)),
                ('acknowledged_at', models.DateTimeField(blank=True, null=True)),
                ('employee', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('reviewer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews_given', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PerformanceGoal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('target_date', models.DateField()),
                ('achievement', models.TextField(blank=True)),
                ('rating', models.DecimalField(decimal_places=2, max_digits=3, null=True)),
                ('review', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr_app.performancereview')),
            ],
        ),
        migrations.CreateModel(
            name='LeaveBalance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.PositiveIntegerField()),
                ('balance', models.DecimalField(decimal_places=1, max_digits=5)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('leave_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr_app.leavetype')),
            ],
            options={
                'unique_together': {('user', 'leave_type', 'year')},
            },
        ),
        migrations.CreateModel(
            name='PayrollDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('component', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='hr_app.payrollcomponent')),
                ('payroll', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr_app.payroll')),
            ],
            options={
                'unique_together': {('payroll', 'component')},
            },
        ),
        migrations.CreateModel(
            name='PayrollPrime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('payroll', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr_app.payroll')),
                ('prime', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hr_app.prime')),
            ],
            options={
                'unique_together': {('payroll', 'prime')},
            },
        ),
    ]
