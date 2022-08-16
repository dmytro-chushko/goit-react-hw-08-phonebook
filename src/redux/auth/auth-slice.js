import { Notify } from 'notiflix';
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from 'redux/auth/auth-operations';

const initialState = {
  user: { user: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice;
