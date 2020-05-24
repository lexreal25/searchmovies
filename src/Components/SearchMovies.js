import React, {useState} from 'react'

import MovieCard from './movieCard'


export default function SearchMovies(){

    //states- input query, movies
    const[query, setQuery] = useState('');

    //state for movies and update the state
    const [movies, setMovies] = useState([]);
    

    //Making call to movie api
    //async() is an instance of the AsyncFunction constructor
    //the async and wait keywords enable asynchronous,promised
    //based behavour to be written in a cleaner style,avloinding the nedd to
    //explicitly configure promise chanis.
    
    const searchMovies = async (e) => {
      e.preventDefault();


      const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
      try{
        const res = await fetch(url);
        const data = await res.json();
       
        setMovies(data.results);
       }catch(err){
           alert(err);
       }
    }


    return(
        <div>
            <form className="row form" onSubmit={searchMovies}>
                
                <div className="input-field col s8 m9 l10">
                  <input type="text" 
                        id="first_name" 
                        className="input" 
                        name="query" 
                        placeholder="i.e cherry.mkv"
                        class="validate"
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)}
                  />
                  <label htmlFor="query" className="label">Movie Name:</label>
                </div>
                <div className="col s4 m3 l2">
                  <button className="button" type="submit">Submit</button>
            
                </div>
            
            </form>
            <div className="card-list">
              <div class="row">
                {
                  movies.filter(movie => movie.poster_path).map(movie => (
                    <div class="col s12 m6">
                      <MovieCard movie={movie} />
                    </div>
                  ))
                }
                
              </div>
                
            </div>      
        </div>
    )
}