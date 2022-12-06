import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../slices/userListSlice";
import userReducer from "../slices/userSlice";
//Global store
const store = configureStore({
  reducer: {
    //reducers are defined here
    userList: userListReducer,
    user: userReducer,
  },
});
export default store;
