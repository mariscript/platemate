import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  zipcode: "",
};

export const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      state.name = action.payload;
    },
    clearUserForm: () => {
      return initialState;
    },
  },
});

export const { storeUser, clearUserForm } = userState.actions;

export default userState.reducer;
