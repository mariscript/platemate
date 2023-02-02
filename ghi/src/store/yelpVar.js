import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zipcode: "00000",
  budget: 1,
  datetime: "2023-01-25 07:00",
  takeInOut: "",
  categories: [],
};

export const yelpVar = createSlice({
  name: "yelp",
  initialState,
  reducers: {
    storeYelp: (state, action) => {
      {
        state.name = action.payload;
      }
    },
    clearYelpForm: () => {
      return initialState;
    },
  },
});

export const { storeYelp, clearYelpForm } = yelpVar.actions;

export default yelpVar.reducer;
