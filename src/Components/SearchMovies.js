import React, {useState} from 'react'

import MovieCard from './movieCard'


export default function SearchMovies() {

  //set loader state
  const [isLoading, setIsLoading] = useState(false);

  //states- input query, movies
  const [query, setQuery] = useState('');

  //state for movies and update the state
  const [movies, setMovies] = useState([]);


  //Making call to movie api
  //async() is an instance of the AsyncFunction constructor
  //the async and wait keywords enable asynchronous,promised
  //based behavour to be written in a cleaner style,avloinding the nedd to
  //explicitly configure promise chanis.

  const searchMovies = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
      setIsLoading(false);
    } catch (err) {
      alert(err);
      setIsLoading(false);
    }
  }


  return (
    <div>
      <form className="row" onSubmit={searchMovies}>

        <div className="input-field col s8 m9 l10">
          <input type="text"
                 id="first_name"
                 className="text-input"
                 placeholder="Search Movie"
                 name="query"
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}/>

        </div>
        <div className="col s4 m3 l2">
          <button className="btn btn-large"
                  type="submit"
                  style={{
                    marginTop: 23,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderRadius: 5
                  }}>
            Submit
          </button>
        </div>

      </form>
      <div className="card-list">
        {
          isLoading ?
            <div style={{margin: 'auto'}}>
              <div className="preloader-wrapper small active">
                <div className="spinner-layer spinner-green-only">
                  <div className="circle-clipper left">
                    <div className="circle"/>
                  </div>
                  <div className="gap-patch">
                    <div className="circle"/>
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle"/>
                  </div>
                </div>
              </div>
            </div>
             :
            <div className="row">
              {
                movies.filter(movie => movie.poster_path).map(movie => (
                  <div className="col s12 m6">
                    <MovieCard movie={movie}/>
                  </div>
                ))
              }

            </div>
        }


      </div>
    </div>
  )
}