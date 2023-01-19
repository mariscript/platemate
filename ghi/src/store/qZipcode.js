import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    zipcode : ""
}

export const qZipcode = createSlice({
    name: 'zipcode',
    initialState,
    reducers: {
        storeZipcode : (state,action) =>
            {state.zipcode = action.payload["zipcode"]}
        }
    }
)

export const {storeZipcode} = qZipcode.actions;

export default qZipcode.reducer;
