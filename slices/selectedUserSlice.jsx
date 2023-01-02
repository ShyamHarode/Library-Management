import { createSlice, current } from "@reduxjs/toolkit";

const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState: {},
  reducers: {
    setSelectedUser(state, action) {
      console.log("selecteduuu--------", action.payload);
      return action.payload;
    },
  },
});

export const { setSelectedUser } = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
