import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isClicked: true

};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    click: (state) => {
        //@ts-ignore
      state.isClicked = true;

    },
    noClick: (state) => {
      state.isClicked = false

    },
  },
});

export const { click,noClick } = menuSlice.actions;
export const selectAuth = (state: { menu: any; }) => state.menu;
export default menuSlice.reducer;