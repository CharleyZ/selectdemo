# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

class Movie(models.Model):
    movie_rating = models.DecimalField(validators=[MinValueValidator(0), MaxValueValidator(5)],max_digits =3,decimal_places=2)
    movie_title = models.CharField(max_length=100)
    movie_id = models.AutoField(primary_key=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{}".format(self.name)
   
    class Meta:
      db_table = "movie"


