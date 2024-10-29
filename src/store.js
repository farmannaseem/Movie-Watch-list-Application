import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './Features/Movies/movieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;