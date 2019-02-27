import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const MovieCard = ({ eachMovie }) => {
  const { title, director, metascore, stars } = eachMovie;
  
  return (      
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>    
  );
};

export default MovieCard;
