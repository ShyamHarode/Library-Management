import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: {},
  status: "",
  books: [],
  payment: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state = action.payload;
    },
    updateInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    updateBooks: (state, action) => {
      state.books = [...state.books, ...action.payload];
      if (state.books.length > 0) {
        state.status = "Active";
      }
    },

    updateAmount: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { updateInfo, setCurrentUser, updateBooks } = userSlice.actions;
export default userSlice.reducer;
