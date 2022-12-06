import { createSlice } from "@reduxjs/toolkit";

const userListSlice = createSlice({
  name: "userList",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id != action.payload);
    },
  },
});
export const { addUser, deleteUser } = userListSlice.actions;
export default userListSlice.reducer;
