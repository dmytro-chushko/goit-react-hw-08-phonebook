import { configureStore, createReducer } from '@reduxjs/toolkit';
import { userAuthApi } from './contacts/contactsOperations';
import { setIsLoggedIn, setUserName } from './contacts/contactsActions';
// import contactsReducer from 'redux/contacts';

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    isLoggedIn: createReducer(false, {
      [setIsLoggedIn]: (_, action) => action.payload,
    }),
    userName: createReducer('', {
      [setUserName]: (_, action) => action.payload,
    }),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
});
