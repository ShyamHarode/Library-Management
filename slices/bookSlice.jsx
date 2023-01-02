import { createSlice } from "@reduxjs/toolkit";

const data =
  typeof window !== "undefined" && localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [
        {
          id: "",
          name: "Ramayan",
          isbn: "456123",
          qty: "5",
          date: "05122022",
          img: "ramayan.jpg",
        },
        {
          id: "",
          name: "Gita",
          isbn: "879651",
          qty: "15",
          date: "05122022",
          img: "ramayan.jpg",
        },
        {
          id: "",
          name: "Panchtantra",
          isbn: "4569823",
          qty: "45",
          date: "05122022",
          img: "ramayan.jpg",
        },
        {
          id: "",
          name: "niv",
          isbn: "4577123",
          qty: "5",
          date: "05122022",
          img: "ramayan.jpg",
        },
        {
          id: "",
          name: "buddh",
          isbn: "456123",
          qty: "5",
          date: "05122022",
          img: "ramayan.jpg",
        },
      ];

const bookSlice = createSlice({
  name: "books",
  initialState: data,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
      console.log("addbook-------------", action.payload);
      localStorage.setItem("books", JSON.stringify(state));
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
