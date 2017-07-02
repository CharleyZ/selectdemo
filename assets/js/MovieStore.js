import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Movie from './Movie';
import $ from 'jquery'; 

class MovieStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

   reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SHOW_ALL:
        var data
         $.ajax({
              url :'http://127.0.0.1:8000/movies/',
                async:false,
                type:"GET",
           success : function(text)
             {
               data = text;
               for (var i =0;i<data.length;i++){
                       state = state.set(data[i]["movie_id"], new Movie({id:data[i]["movie_id"],
                                                       title:data[i]["movie_title"],
                                        rating: parseFloat(data[i]["movie_rating"]),
                                        show:true}))
                 }
             }
         
         });
        return state;


     case ActionTypes.SHOW_DETAIL:
        $.ajax({
           url :'http://127.0.0.1:8000/movies/'+action.id+'/',
           async:false,
           type:"GET",
           success : function(text)
           {                     
           state = state.map(movies => movies.set('show',false))
             data = text;
               state = state.set(data["movie_id"], new Movie({id:data["movie_id"],
                                        title:data["movie_title"],
                                        rating: parseFloat(data["movie_rating"]),
                                        created_date: data["date_created"].substring(0,10),
                                        metascore: parseFloat(data["metascore"]),
                                        imdbrating: parseFloat(data["imdbrating"]),
                                        img_src : data["img_src"],
                                        show:true,}));            
           }
         });
        return state;


      case ActionTypes.UPDATE:
           $.ajax({
           url :'http://127.0.0.1:8000/movies/'+action.id+'/',
           async:false,
           type:"PUT",
           data: {"movie_rating":action.rating,"movie_title":action.title},
           success : function(text)
           {                     
                var data
                $.ajax({
                    url :'http://127.0.0.1:8000/movies/',
                    async:false,
                    type:"GET",
                    success : function(text)
                   {
                  data = text;
                   for (var i =0;i<data.length;i++){
                       state = state.set(data[i]["movie_id"], new Movie({id:data[i]["movie_id"],
                                                       title:data[i]["movie_title"],
                                        rating: parseFloat(data[i]["movie_rating"]),
                                        show:true}))
                 }
             }
         
           });
           }
         });

        return state;

       case ActionTypes.REGISTER:
          $.ajax({
           url :'http://127.0.0.1:8000/movies/',
           async:false,
           type:"POST",
           dataType: "json",
           data: {"movie_rating":action.rating,"movie_title":action.title},
           success : function(text)
           {                     
                var data
                $.ajax({
                    url :'http://127.0.0.1:8000/movies/',
                    async:false,
                    type:"GET",
                    success : function(text)
                   {
                  data = text;
                   for (var i =0;i<data.length;i++){
                       state = state.set(data[i]["movie_id"], new Movie({id:data[i]["movie_id"],
                                                       title:data[i]["movie_title"],
                                        rating: parseFloat(data[i]["movie_rating"]),
                                        show:true}))
                 }
             }
         
           });
           }
         });
        return state;


      default:
        return state;
    }
  }         
 
}

export default new MovieStore();