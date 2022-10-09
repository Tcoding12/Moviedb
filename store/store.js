import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
