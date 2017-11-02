import React from 'react';
import { Link } from  'react-router';

export default function SearchResult (props){
  //console.log(props.movieResult)
  return(
    <div>
    { !props.movieResult.length ?
      <div>
        Inicie una Busqueda
      </div>
        :
      <div>
        <center><h1>Results</h1></center>
        <div className = 'row'>
          { props.movieResult.map(movie =>
            <div key={movie.imdbID} className="col-sm-6 col-md-4">
              <div className='thumbnail'>
              <div className='content'>
                <img src={movie.Poster} className="img-responsive" />
                <div className="caption">
                  <h3>
                    <li key={movie.imdbID}>
                      <Link to={`/movie/${movie.imdbID}`}>
                        {movie.Title}
                      </Link>
                    </li>
                  </h3>
                  <br />
                  <p>{movie.Year}</p>
                </div>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
      }
    </div>
  )
}
