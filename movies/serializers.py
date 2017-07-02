from rest_framework import serializers
from .models import Movie

class MovieSerializer(serializers.ModelSerializer):
    """ map  Model into JSON """

    class Meta:
        model = Movie
        fields = ('movie_rating', 'movie_title', 'movie_id','date_created')


