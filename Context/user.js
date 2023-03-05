import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  toggleMenu: false,
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToggleMenu: (state) => {
      state.toggleMenu = !state.toggleMenu;
    }
  }
})

export const { setUser, setToggleMenu } = user.actions;

export const getUser = state => state.user.user;
export const toggleMenu = user.actions.setToggleMenu;

export default user.reducer;