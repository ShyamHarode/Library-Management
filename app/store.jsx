import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../slices/userListSlice";
import userReducer from "../slices/userSlice";
import booksReducer from "../slices/bookSlice";
import cartReducer from "../slices/cartSlice";
import loggedUserReducer from "../slices/loggedUserSlice";
import selectedUserReducer from "../slices/selectedUserSlice";

const store = configureStore({
  reducer: {
    userList: userListReducer,
    user: userReducer,
    loggedUser: loggedUserReducer,
    selectedUser: selectedUserReducer,
    books: booksReducer,
    cart: cartReducer,
  },
});
export default store;
