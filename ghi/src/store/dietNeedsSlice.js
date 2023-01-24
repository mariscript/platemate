import { createSlice } from "@reduxjs/toolkit";

const initialState = {allergies : {}, diet_restrict: {}};

export const dietNeedsState = createSlice({
  name: "dietNeeds",
  initialState,
  reducers: {
    storeDietNeeds: (state, action) => {
        {state.name = action.payload}
    },
    clearDietNeedsForm: () => {
      return initialState;
    },
  },
});

export const { storeDietNeeds, clearDietNeedsForm } = dietNeedsState.actions;

export default dietNeedsState.reducer;
