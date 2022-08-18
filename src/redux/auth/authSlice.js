import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
      state.isLoggedIn = true;
    },
    unsetToken: state => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setToken, unsetToken } = slice.actions;
