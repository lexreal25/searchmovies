import React, {useState} from 'react'

import MovieCard from './movieCard'


export default function SearchMovies() {

  //set loader state
  const [isLoading, setIsLoading] = useState(false);

  //states- input query, movies
  const [query, setQuery] = useState('');

  //state for movies and update the state
  const [movies, setMovies] = useState([
    // {
    //   popularity: 100.167,
    //   vote_count: 4572,
    //   video: false,
    //   poster_path: "/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
    //   id: 330457,
    //   adult: false,
    //   backdrop_path: "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
    //   original_language: "en",
    //   original_title: "Frozen II",
    //   genre_ids: [12, 16, 10751],
    //   title: "Frozen II",
    //   vote_average: 7.2,
    //   overview: "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
    //   release_date: "2019-11-20"
    // },
    // {
    //   popularity: 40.965,
    //   vote_count: 11815,
    //   video: false,
    //   poster_path: "/yald8Lsb4uCRvjIH3spzR84Kdwf.jpg",
    //   id: 109445,
    //   adult: false,
    //   backdrop_path: "/fydUcbkqLyESCFa9U5XKqi8dIVj.jpg",
    //   original_language: "en",
    //   original_title: "Frozen",
    //   genre_ids: [12, 16, 10751],
    //   title: "Frozen",
    //   vote_average: 7.3,
    //   overview: `Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation.
    //    Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom.
    //    She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she
    //    will find out what friendship, courage, family, and true love really means.`,
    //   release_date: "2013-11-27"
    // }
  ]);


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
      console.log(data);

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
                  <div className="col s6 m4">
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