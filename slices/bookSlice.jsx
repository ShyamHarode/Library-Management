import { createSlice } from "@reduxjs/toolkit";

const data =
  typeof window !== "undefined" && localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [];

const bookSlice = createSlice({
  name: "books",
  initialState: data,
  reducers: {
    addBook: (state, action) => {
      state = state.push(action.payload);
      console.log("addbook-------------", action.payload);
      localStorage.setItem("books", JSON.stringify(state));
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
