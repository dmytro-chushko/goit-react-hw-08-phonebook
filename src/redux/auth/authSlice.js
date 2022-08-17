import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
};

const slice = createSlice({
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

export const getToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;

export default slice.reducer;
