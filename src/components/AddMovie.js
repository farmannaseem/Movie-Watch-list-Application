import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieAdded } from '../Features/Movies/movieSlice';
import { addMovieAPI } from '../Features/Movies/movieAPI';
import './AddMovie.css';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = async () => {
    const newMovie = { title };
    const addedMovie = await addMovieAPI(newMovie);
    dispatch(movieAdded(addedMovie));
    setTitle('');
  };

  return (
    <div className='add-movie-container'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new movie"
      />
      <button onClick={handleAdd} className='add-movie-button'>Add Movie</button>
    </div>
  );
};

export default AddMovie;
