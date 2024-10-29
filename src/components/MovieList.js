import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from './MovieItem';
import MovieSearch from './MovieSearch';
import { fetchMovies } from '../Features/Movies/movieSlice';
import './MovieList.css';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movie-list">
      <h2>Your Movie Watchlist</h2>
      <MovieSearch />
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </ul>
      ) : (
        <div className="movie-list-empty">No movies in your watchlist.</div>
      )}
    </div>
  );
};

export default MovieList;

