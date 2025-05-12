import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter((favId) => favId !== id);
      } else {
        state.items.push(id);
      }
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
