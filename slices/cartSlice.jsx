import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    bookCart: [],
    payment: 0,
  },
  reducers: {
    updateCart: (state, action) => {
      const bookObj = action.payload;
      if (state.bookCart?.some((book) => book.id === bookObj.id)) {
        state.bookCart.splice(
          state.bookCart.findIndex((book) => book.id === bookObj.id),
          1
        );
      } else {
        state.bookCart.push(bookObj);
      }
    },
    updateCartPayment: (state, action) => {
      state.payment = action.payload;
    },
    resetCart: (state, action) => {
      return {
        bookCart: [],
        payment: 0,
      };
    },
  },
});

export const { updateCart, updateCartPayment, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
