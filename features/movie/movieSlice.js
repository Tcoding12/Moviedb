import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  id: null,
  background: null,
  description: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieItems: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.background = action.payload.background;
      state.description = action.payload.description;
    },
  },
});

export const { setMovieItems } = movieSlice.actions;

export const selectName = (state) => state.movie.name;
export const selectId = (state) => state.movie.id;
export const selectBackground = (state) => state.movie.background;
export const selectDescription = (state) => state.movie.description;

export default movieSlice.reducer;
