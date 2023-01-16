import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  authState: false,
  authUser: {},
};
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.authUser = action.payload;
    },

    setAuthState(state, action) {
      state.authState = action.payload;
    },
  },
});

export const { setLoggedUser, setAuthState } = authSlice.actions;
export default authSlice.reducer;
