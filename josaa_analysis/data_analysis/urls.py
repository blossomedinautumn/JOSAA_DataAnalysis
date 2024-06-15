from django.urls import path, include
from . import views
from django.contrib import admin

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('inst_wise/', views.inst_wise, name='inst_wise'),
    path('rounds/', views.round_analysis, name='round_analysis'),
    path('each_inst/', views.each_inst, name='each_inst'),
    path('branch/', views.branch, name='branch'),
    path('iits_preferred/', views.iits_preferred, name='iits_preferred'),
    path('cse/', views.cse, name='cse'),
    path('popular_branch/', views.popular_branch, name='popular_branch'),
    path('contact/', views.contact, name='contact'),
    path('copyright/', views.copyright, name='copyright'),
    path('help/', views.help, name='help'),
    path('hyperlink/', views.hyperlink, name='hyperlink'),
    path('privacy/', views.privacy, name='privacy'),
    path('terms_conditions/', views.terms_conditions, name='terms_conditions'),
    path('opening_closing/', views.opening_closing, name='opening_closing'),
]