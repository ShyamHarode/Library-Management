import { createSlice } from "@reduxjs/toolkit";

const data =
  typeof window !== "undefined" && localStorage.getItem("libraryUserList")
    ? JSON.parse(localStorage.getItem("libraryUserList"))
    : [
        {
          id: 45646,
          userInfo: {
            username: "ShyamHarode",
            firstName: "shyam",
            lastName: "harode",
            email: "shyam",
            password: "1234",
            type: "ADMIN",
          },
          status: "ACTIVE",
          books: [
            { id: "1", name: "Ramayan", isbn: "46564" },
            { id: "1", name: "Ramayan", isbn: "46564" },
          ],
          payment: 57,
        },
        {
          id: 4546646,

          userInfo: {
            username: "ShyamHarode5395",
            firstName: "Ajay",
            lastName: "hh",
            email: "shsyam",
            password: "1234",
            type: "USER",
          },
          status: "INACTIVE",
          books: [],
          payment: 53,
        },
        {
          id: 4561346,

          userInfo: {
            username: "vijayHarode",
            firstName: "vijay",
            lastName: "harode",
            email: "vijay",
            password: "1234",
            type: "USER",
          },
          status: "ACTIVE",
          books: [
            { id: "1", name: "Ramayan", isbn: "46564" },
            { id: "1", name: "Ramayan", isbn: "46564" },
            { id: "1", name: "Ramayan", isbn: "46564" },
            { id: "1", name: "Ramayan", isbn: "46564" },
          ],
          payment: 535,
        },
        {
          id: 4465646,

          userInfo: {
            username: "praveen",
            firstName: "praveen",
            lastName: "rao",
            email: "praveen",
            password: "1234",
            type: "USER",
          },
          status: "INACTIVE",
          books: [],
          payment: 513,
        },
        {
          id: 45641336,

          userInfo: {
            username: "sanju5",
            firstName: "sanjay",
            lastName: "a",
            email: "sanjay",
            password: "1234",
            type: "USER",
          },
          status: "INACTIVE",
          books: [],
          payment: 583,
        },
      ];

const userListSlice = createSlice({
  name: "userList",
  initialState: data,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      // console.log("userlist--------", action.payload);
      localStorage.setItem("libraryUserList", JSON.stringify(state));
    },
    deleteUser: (state, action) => {
      state.splice(action.payload, 1);
      localStorage.setItem("libraryUserList", JSON.stringify(state));
    },
    updateBooks: (state, action) => {
      const { cart, user } = action.payload;
      const selectedUser = state.find((u) => u.id == user.id);
      selectedUser.books = [...selectedUser.books, ...cart];
      selectedUser.status = "ACTIVE";
      localStorage.setItem("libraryUserList", JSON.stringify(state));
    },
  },
});

export const { addUser, deleteUser, updateBooks } = userListSlice.actions;
export default userListSlice.reducer;
