import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import yelpReducer from './yelpVar'

const reducers = combineReducers({
  yelp: yelpReducer})

const persistConfig = {
  key: 'root',
  storage,
  }

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
  });
