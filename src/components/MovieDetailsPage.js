import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { movieRemoved, movieToggledWatched, addRating, editRating } from '../Features/movies/moviesSlice'; // Adjust actions as per your Redux setup
import './MovieDetailsPage.css'; // Adjust CSS file path

const MovieDetailsPage = () => {
  const { id } = useParams(); // Retrieve movie ID from URL params
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.find((movie) => movie.id === parseInt(id)));

  if (!movie) {
    return <div>Movie not found.</div>; // Handle edge case where movie is not found
  }

  const handleRemove = () => {
    dispatch(movieRemoved(movie.id));
    // Redirect to home or another page after deletion if needed
  };

  const handleToggleWatched = () => {
    dispatch(movieToggledWatched(movie.id));
  };

  const handleAddRating = () => {
    const rating = prompt('Enter rating (1-5):');
    if (rating && !isNaN(parseFloat(rating)) && parseFloat(rating) >= 1 && parseFloat(rating) <= 5) {
      dispatch(addRating({ id: movie.id, rating: parseFloat(rating) }));
    } else {
      alert('Please enter a valid rating (1-5).');
    }
  };

  const handleEditRating = () => {
    const newRating = prompt('Enter new rating (1-5):', movie.rating);
    if (newRating && !isNaN(parseFloat(newRating)) && parseFloat(newRating) >= 1 && parseFloat(newRating) <= 5) {
      dispatch(editRating({ id: movie.id, rating: parseFloat(newRating) }));
    } else {
      alert('Please enter a valid rating (1-5).');
    }
  };

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Status: {movie.watched ? 'Watched' : 'Unwatched'}</p>
      {movie.rating ? (
        <p>Rating: {movie.rating} <button onClick={handleEditRating}>Edit Rating</button></p>
      ) : (
        <button onClick={handleAddRating}>Add Rating</button>
      )}
      <div className="actions">
        <button onClick={handleToggleWatched}>
          {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
        </button>
        <button onClick={handleRemove}>Delete Movie</button>
        <Link to={`/movies/edit/${id}`}>
          <button>Edit Movie</button>
        </Link>
        {/* Link to edit movie page */}
      </div>
      {/* Reviews section - add UI and functionality as per your requirements */}
    </div>
  );
};

export default MovieDetailsPage;
