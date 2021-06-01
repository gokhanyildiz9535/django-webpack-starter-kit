"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.urls import path
from django.shortcuts import render, redirect
from django.conf.urls.static import static
from django.conf import settings
from core.views import Home, Contact, About, GridTable

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Home.as_view(), name="index"),
    path('contact/', Contact.as_view(), name="contact"),
    path('about/', About.as_view(), name="about"),
    path('table/', GridTable.as_view(), name="table"),
]

# STATIC_ROOT is used to configure the directory where static assets are placed.
# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# MEDIA_ROOT is the directory where file uploads are placed.
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
handler404 = 'core.views.view_404'  # Run with debug = False
