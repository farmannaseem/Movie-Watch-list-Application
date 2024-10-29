// components/MovieForm.js

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { movieAdded, movieToggledWatched } from '../Features/Movies/movieSlice';

const MovieForm = ({ movieToEdit, onCancel }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    if (movieToEdit) {
      setTitle(movieToEdit.title);
      setDescription(movieToEdit.description);
      setReleaseYear(movieToEdit.releaseYear);
      setGenre(movieToEdit.genre);
    }
  }, [movieToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieToEdit) {
      // Dispatch action to update existing movie
      dispatch(movieToggledWatched(movieToEdit.id));
      // Additional logic to update other fields if needed
    } else {
      // Dispatch action to add new movie
      dispatch(movieAdded({
        title,
        description,
        releaseYear,
        genre,
        watched: false // Example default value
      }));
    }
    // Reset form fields
    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
    // Close the form or handle navigation
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Release Year:
        <input
          type="text"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          required
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </label>
      <button type="submit">{movieToEdit ? 'Save Changes' : 'Add Movie'}</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default MovieForm;
