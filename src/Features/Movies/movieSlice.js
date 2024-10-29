import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMoviesAPI } from './movieAPI';

// Async thunk action to fetch movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetchMoviesAPI(); // Implement fetchMoviesAPI function
  return response.data; // Adjust data extraction based on your API response structure
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    movieAdded(state, action) {
      state.push(action.payload);
    },
    movieRemoved(state, action) {
      return state.filter(movie => movie.id !== action.payload);
    },
    movieToggledWatched(state, action) {
      const movie = state.find(movie => movie.id === action.payload);
      if (movie) {
        movie.watched = !movie.watched;
      }
    },
    addRating(state, action) {
      const movie = state.find(movie => movie.id === action.payload.id);
      if (movie) {
        movie.rating = action.payload.rating;
      }
    },
    editRating(state, action) {
      const movie = state.find(movie => movie.id === action.payload.id);
      if (movie) {
        movie.rating = action.payload.rating;
      }
    },
    // Add other reducers as needed (e.g., editMovieDetails, addReview, etc.)
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      return action.payload; // Assuming API returns an array of movies
    });
  },
});

export const { movieAdded, movieRemoved, movieToggledWatched, addRating, editRating } = moviesSlice.actions;

export default moviesSlice.reducer;