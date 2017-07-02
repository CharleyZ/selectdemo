from django.conf.urls import url,include
from .views import MovieList
from .views import MovieDetail
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^movies/$', MovieList.as_view()),
    url(r'^movies/(?P<pk>[0-9]+)/$', views.MovieDetail.as_view()),
]









