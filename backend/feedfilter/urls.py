
from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^register/$', views.register, name= "register"),
    url(r'^login/$', views.login, name= "login"),
    url(r'^logout/$', views.logout, name= "logout"),
    url(r'^authenticate/$', views.check_authentication, name="check_authentication"),
    url(r'^receive_post/$', views.receive_post, name="receive_post"),
]
