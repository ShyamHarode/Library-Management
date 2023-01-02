import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    updateCart: (state, action) => {
      if (state.some((book) => book.name === action.payload.name)) {
        state.splice(
          state.findIndex((book) => book.name === action.payload.name),
          1
        );
      } else {
        state.push(action.payload);
      }
      console.log("cart--------", action.payload);
    },
    resetCart: (state, action) => {
      return [];
    },
  },
});

export const { updateCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
