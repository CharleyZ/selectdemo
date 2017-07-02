import React from "react";
import  style from '../css/style.css';
import Immutable from 'immutable';
function Home(props) {
  return (
    <div>
    <div  className="top_space">A Demo For Django Rest API</div>
    <div id="wrapper">
      <Inputs {...props} />
      <Buttons {...props} />
      <Data {...props} />
    </div>
    <div  className="foot_space">made by Junchi Zhang</div>
    </div>
  );
}

function Buttons(props) {
  return (
    <div id="button_div">
      <button  onClick={() => props.onShowall()}>Show All Movies</button>
      <button   onClick={() => props.onShowdetail(props.IDDraft)}>Show Movie Detail</button>
      <button  onClick={() => props.onUpdate(props.IDDraft,props.titleDraft,props.ratingDraft)}>Update A Movie</button>
      <button onClick={() => props.onRegister(props.titleDraft,props.ratingDraft)}>Register A New Movie</button>
    </div>
  );
}


function Inputs(props) {
   const onChangeID = (event) => props.onEditID(event.target.value);
    const onChangeTitle = (event) => props.onEditTitle(event.target.value);
      const onChangeRating = (event) => props.onEditRating(event.target.value);
  return (
    <div id="input_div">
    <div className ="tips">
    tips:
    <ul>
    <li>This is a demo made for a software engineer job interview.</li>
    <li>This is made with Django and React Flux, they are connected by Restful APIs</li>
    <li>To show specific movie info, just input the movie ID and click show detail button.</li>
    <li>You can find all movie IDs on the list of all movies</li>
    <li>To Register a new movie, you must input both the movie title and rating, the movie ID will be given by the backend.</li>
    <li>To Update a movie, you have to input the movie id, rating and title.</li>
    <li>This demo will be deleted in few weeks.</li>   
    </ul>
     </div>
    <div>
      <label>Movie Title :  </label>
      <input value={props.titleDraft} onChange={onChangeTitle}/>
    </div>
    <div>
      <label>Movie Rating :  </label>
      <input value={props.ratingDraft}  onChange={onChangeRating} />
    </div>
    <div>      
      <label>Movie ID :    </label>
      <input value={props.IDDraft}  onChange={onChangeID} />
    </div>    
    </div>
  );
}



function Data(props) {
  if (props.movies.size === 0) {
    return null;
  }
   const movie_num = props.movies.filter(movie => movie.show).size;
   if(movie_num == 1){
    return(
       <div >
      {[...props.movies.filter(movie => movie.show).values()].reverse().map(movie => (
    <div id="data_div" key={movie.id}>   
          <div id="poster">
          <img src={movie.img_src}
          alt="poster" />
          </div>
            <div className="movie_detail">
              <p><label> Movie Title : {movie.title}</label></p>
              <p> <label> Movie Rating : {movie.rating}</label></p>
              <p> <label>Movie ID : {movie.id}</label></p>
               <p> <label>Movie Metascore : {movie.metascore}</label></p>
                <p> <label>Movie Imdbrating: {movie.imdbrating}</label></p>
                <p> <label>Movie Date Created : {movie.created_date}</label></p>
            </div>
            </div>
        ))}
       </div>
    )
   }
   else{
    return (
    <div id="data_div">
       <table>
         <tbody>
         <tr>
         <th>Movie Title</th>
         <th>Movie Rating</th>
         <th>Movie ID</th>
            </tr>      
         {[...props.movies.filter(movie => movie.show).values()].reverse().map(movie => (
              <tr key={movie.id}>  
             <td>{movie.title}</td>
            <td>{movie.rating}</td>
            <td>{movie.id}</td>
         </tr>
          ))}
          </tbody>
          </table>
    </div>
    )
   }






 return (
 <div>
{movie_num}</div>
  );

}




export default Home;