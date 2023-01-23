import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const allergiesState = createSlice({
  name: "allergies",
  initialState,
  reducers: {
    storeAllergies: (state, action) => {
        return {...state = action.payload}
    },
    clearAllergiesForm: () => {
      return initialState;
    },
  },
});

export const { storeAllergies, clearAllergiesForm } = allergiesState.actions;

export default allergiesState.reducer;
