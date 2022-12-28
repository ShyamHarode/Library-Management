import { createSlice } from "@reduxjs/toolkit";

// const data =
//   typeof window !== "undefined" && localStorage.getItem("books")
//     ? JSON.parse(localStorage.getItem("books"))
//     : [];

const userListSlice = createSlice({
  name: "userList",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log("userlist--------", action.payload);
      // localStorage.setItem("books", JSON.stringify(state));
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id != action.payload);
    },
  },
});
export const { addUser, deleteUser } = userListSlice.actions;
export default userListSlice.reducer;
