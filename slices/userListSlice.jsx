import { createSlice } from "@reduxjs/toolkit";
import data from "../public/data/userList.json";

const userListSlice = createSlice({
  name: "userList",
  initialState: data,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateBooks: (state, action) => {
      const { cart, user, payment } = action.payload;
      const selectedUser = state.find((u) => u.id == user.id);
      selectedUser.books = [...selectedUser.books, ...cart];
      selectedUser.status = "ACTIVE";
      selectedUser.payment = selectedUser.payment + +payment;
    },
  },
});

export const { addUser, deleteUser, updateBooks } = userListSlice.actions;
export default userListSlice.reducer;
