# hr_system/employees/permissions.py

from rest_framework import permissions

class IsHRManager(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name='HR_Manager').exists()