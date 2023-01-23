import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, action) => {
        {state.name = action.payload}
    },
    clearUserForm: () => {
      return initialState;
    },
  },
});

export const { storeUser, clearUSerForm } = userState.actions;

export default userState.reducer;
