import Immutable from 'immutable';

const Movie = Immutable.Record({
  id: '',
  title: '',
  rating: '',
  show: true,
  created_date:'',
  imdbrating:'',
  metascore:'',
  img_src:'',
});

export default Movie;