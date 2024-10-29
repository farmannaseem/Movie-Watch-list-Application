// src/components/MovieCard.js
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={`/${movie.poster}`} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-description">{movie.description}</p>
        <p className="movie-details">{movie.releaseYear} | {movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
