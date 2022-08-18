import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userAuthApi } from './auth/authOperations';
import { persistedReducer } from './auth/authPersist';
import { contactsApi } from './contacts/contactsOperations';
import { filterReducer } from './contacts/contactsFilterSlice';

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: persistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    contactsFilter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userAuthApi.middleware)
      .concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
