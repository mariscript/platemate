import { configureStore } from '@reduxjs/toolkit'
import qZipcode from './qZipcode'

export const store = configureStore({
  reducer: {
    question1: qZipcode.reducer,
  },
})
