import { configureStore } from '@reduxjs/toolkit';
import { userAuthApi } from './contacts/contactsOperations';
import auth from './auth/authSlice';
// import contactsReducer from 'redux/contacts';

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
});
