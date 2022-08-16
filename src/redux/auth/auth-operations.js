import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async userValues => {
  try {
    const { data } = await axios.post('/users/signup', userValues);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async userValues => {
  try {
    const { data } = await axios.post('/users/login', userValues);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    Notify.failure(error.message);
  }
});
