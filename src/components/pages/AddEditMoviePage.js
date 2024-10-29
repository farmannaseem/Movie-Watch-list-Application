
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // Ensure useHistory is imported correctly
import MovieForm from '../MovieForm'; // Ensure path is correct relative to AddEditMoviePage.js

const AddEditMoviePage = () => {
  const { id } = useParams(); // Ensure useParams is imported correctly
  const movies = useSelector(state => state.movies); // Assuming you have 'movies' state in your Redux store
  const history = useNavigate(); // Ensure useHistory is imported correctly

  const movieToEdit = movies.find(movie => movie.id === parseInt(id));

  const handleCancel = () => {
    history.push('/'); // Example: Navigate back to home page on cancel
  };

  return (
    <div>
      <h2>{movieToEdit ? 'Edit Movie' : 'Add New Movie'}</h2>
      <MovieForm movieToEdit={movieToEdit} onCancel={handleCancel} />
    </div>
  );
};

export default AddEditMoviePage;
