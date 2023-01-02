import { createSlice, current } from "@reduxjs/toolkit";

const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState: {},
  reducers: {
    setLoggedUser: (state, action) => {
      console.log("loggeduser--------", action.payload);
      return action.payload;
    },
  },
});

export const { setLoggedUser } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
