from __future__ import unicode_literals
from django.shortcuts import render
import requests
import json
from rest_framework import generics
from .serializers import MovieSerializer
from .models import Movie
from rest_framework.response import Response
from django.http import Http404
from rest_framework.views import APIView
from rest_framework import status


""" the Home Page for the single page application made by react"""
def index(request):
    return render(request, "index.html")

""" rest apis for multiple movie instances"""
class MovieList(APIView):
    def get(self, request):
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# rest apis for singe movie instance
# make sure the id does exist
class MovieDetail(APIView):
    def get_object(self, pk):
        try:
            return Movie.objects.get(pk=pk)
        except Movie.DoesNotExist:
            raise Http404

#get more info from the 3rd party api. the 3rd party apikey should be in a config file, but I put it here directly for simplicity
   
    def get(self, request, pk, format=None):
        movie = self.get_object(pk)
        movie = MovieSerializer(movie)
        data = movie.data
        title = data["movie_title"]
        payload = {'i':r'tt3896198','apikey':r'ef9fe82a','t':title}	
        r = requests.get('http://www.omdbapi.com',  params=payload)
        resp = json.loads(r.text)
        data["metascore"] = resp['Metascore']
        data["imdbrating"] = resp['imdbRating']
        data["img_src"] = resp['Poster']
        return Response(data)


    def put(self, request, pk, format=None):
        movie = self.get_object(pk)
        serializer = MovieSerializer(movie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        movie = self.get_object(pk)
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)