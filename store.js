import { configureStore } from "@reduxjs/toolkit";
import appliedReducer from "./Context/applied";
import userReducer from './Context/user'

export const store = configureStore({
  reducer:{
    user: userReducer,
    applied: appliedReducer
  }
})