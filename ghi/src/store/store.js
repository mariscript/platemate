import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { PURGE, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import yelpReducer from "./yelpVar";
import restListReducer from "./restListState";
import userReducer from "./userSlice";
import dietNeedsReducer from "./dietNeedsSlice";

const reducers = combineReducers({
  yelp: yelpReducer,
  restListState: restListReducer,
  userSlice: userReducer,
  dietNeeds: dietNeedsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
