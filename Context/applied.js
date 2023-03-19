import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAppliedJobs: null,
};

export const appliedJobs = createSlice({
  name: "applied",
  initialState,
  reducers: {
    setUserAppliedJobs: (state, action) => {
      state.userAppliedJobs = action.payload;
    },
  },
});

export const { setUserAppliedJobs } = appliedJobs.actions;

export const getAppliedJobs = (state) => state.applied.userAppliedJobs;

export default appliedJobs.reducer;
