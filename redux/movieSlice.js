import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    shortlisted: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.shortlisted.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.shortlisted = state.shortlisted.filter(movie => movie.imdbID !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
