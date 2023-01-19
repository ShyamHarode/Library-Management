import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../slices/userListSlice";
import userReducer from "../slices/userSlice";
import booksReducer from "../slices/bookSlice";
import cartReducer from "../slices/cartSlice";
import selectedUserReducer from "../slices/selectedUserSlice";
import authReducer from "../slices/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const reducers = combineReducers({
  userList: userListReducer,
  user: userReducer,
  auth: authReducer,
  selectedUser: selectedUserReducer,
  books: booksReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
