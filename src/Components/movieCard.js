import React from 'react'
import '../Component_styles/searchMovie.css'

export default function MovieCard({movie}) {
    
    return(
        <div className="card" key={movie.id} >
          <div className='card-image'>
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                 alt={movie.title + ' poster'}
            />
          </div>
          <div className='card-content'>
            <span className="card-title">{movie.title}</span>
            <p style={{lineHeight: 1, fontSize: 14}}>Release Date: {movie.release_date}</p>
            <p style={{fontSize: 14}}>Rating: {movie.vote_average}</p>
            <br/>
            <p style={{fontSize: 14}}>{movie.overview.substring(0, 200)}...</p>
          </div>
            {/*<img className="card--image"*/}
            {/*    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}*/}
            {/*    alt={movie.title + ' poster'}*/}
            {/*    />*/}
            {/*<div className="card--content">*/}
            {/*    <h4 className="card--title">{movie.title}</h4>*/}
            {/*    <p><small>RELEASE DATE: {movie.release_date}</small></p>*/}
            {/*    <p><small>RATING: {movie.vote_average}</small></p>*/}
            {/*    <p className="card--desc">{movie.overview}</p>*/}
            {/*</div>*/}

        </div>
            
    )
} 