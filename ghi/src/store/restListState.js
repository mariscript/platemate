import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const restListState = createSlice({
  name: "restListState",
  initialState,
  reducers: {
    storeRestList: (state, action) => {
        return {...state = action.payload}
    },
    clearForm: () => {
      return initialState;
    },
  },
});

export const { storeRestList, clearForm } = restListState.actions;

export default restListState.reducer;
