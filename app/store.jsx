import { configureStore } from "@reduxjs/toolkit";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    addUser: addUser,
  },
});
