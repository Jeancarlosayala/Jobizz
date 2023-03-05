import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Context/user'

export const store = configureStore({
  reducer:{
    user: userReducer,
  }
})