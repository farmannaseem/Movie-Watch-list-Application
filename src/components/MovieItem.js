import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieRemoved, movieToggledWatched } from '../Features/Movies/movieSlice';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(movie.title);
  const [editedDescription, setEditedDescription] = useState(movie.description);

  const handleRemove = () => {
    dispatch(movieRemoved(movie.id));
  };

  const handleToggleWatched = () => {
    dispatch(movieToggledWatched(movie.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
   
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(movie.title);
    setEditedDescription(movie.description);
    setIsEditing(false);
  };

  return (
    <li className="movie-item">
      {!isEditing ? (
        <div className="movie-details">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>{movie.releaseYear} | {movie.genre}</p>
          <p>Status: {movie.watched ? "Watched" : "Unwatched"}</p>
        </div>
      ) : (
        <div className="movie-details">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <p>{movie.releaseYear} | {movie.genre}</p>
          <p>Status: {movie.watched ? "Watched" : "Unwatched"}</p>
        </div>
      )}
      <div className="movie-actions">
        {!isEditing ? (
          <>
            <button className="edit-button" onClick={handleEdit}>Edit</button>
            <button className="delete-button" onClick={handleRemove}>Delete</button>
            <button className="toggle-button" onClick={handleToggleWatched}>
              {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
            </button>
          </>
        ) : (
          <>
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          </>
        )}
      </div>
    </li>
  );
};

export default MovieItem;

