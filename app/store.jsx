import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../slices/userListSlice";
import userReducer from "../slices/userSlice";
import booksReducer from "../slices/bookSlice";
//Global store
const store = configureStore({
  reducer: {
    //reducers are defined here
    userList: userListReducer,
    user: userReducer,
    books: booksReducer,
  },
});
export default store;
