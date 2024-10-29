import axios from 'axios';

export const fetchMoviesAPI = async () => {
  const response = await axios.get('http://localhost:3001/movies');
  return response.data;
};

export const addMovieAPI = async (movie) => {
  const response = await axios.post('http://localhost:3001/movies', movie);
  return response.data;
};
