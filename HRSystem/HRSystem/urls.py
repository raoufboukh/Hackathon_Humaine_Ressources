"""
URL configuration for HRSystem project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.views.generic import RedirectView
from django.contrib.auth import views as auth_views
from django.urls import path
from hr_app.views import login_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('hr_app.urls')),
    path('api/admin/', include('admin.urls')),  # Ajoutez cette ligne
    path('employees/', include('employees.urls')),
    path('', RedirectView.as_view(url='login/', permanent=False)),
    path('login/', login_view, name='login_view'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
]

