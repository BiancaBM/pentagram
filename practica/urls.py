"""practica URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include
from django.contrib import admin
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from django.views.generic.base import TemplateView
from pentagram.views import comments,likes, CustomObtainAuthToken

urlpatterns = [

    url(r'^api/v1/login/$', CustomObtainAuthToken.as_view()),
    url(r'^api/v1/photos/$', 'pentagram.views.photos', name='photos'),
    url(r'^api/v1/users/$', 'pentagram.views.users', name='users'),
    url(r'^api/photos/(?P<id_photo>[0-9]*)/comments/$', comments),
    url(r'^api/photos/(?P<id_photo>[0-9]*)/likes/$', likes, name="likes"),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='homepage'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
