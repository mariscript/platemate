import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dietRestrictState = createSlice({
  name: "dietRestrict",
  initialState,
  reducers: {
    storeDietRestrict: (state, action) => {
        return {...state = action.payload}
    },
    clearDietRestrictForm: () => {
      return initialState;
    },
  },
});

export const { storeDietRestrict, clearDietRestrictForm } = dietRestrictState.actions;

export default dietRestrictState.reducer;
