import { createSlice } from "@reduxjs/toolkit";
import data from "../public/data/bookList.json";

const bookSlice = createSlice({
  name: "books",
  initialState: data,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    setBookQuantity: (state, action) => {
      const cart = action.payload;
      for (let item of cart) {
        for (let book of state) {
          if (item.id === book.id && book.qty > 0) {
            book.qty--;
          }
        }
      }
    },
    deleteBook: (state, action) => {
      state.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addBook, setBookQuantity, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
