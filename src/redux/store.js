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
import { authOperations, persistedReducer } from 'redux/auth';
import { contactsOperations, contactsFilterSlice } from 'redux/contacts';

const { userAuthApi } = authOperations;
const { contactsApi } = contactsOperations;
const { filterReducer } = contactsFilterSlice;

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: persistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    contactsFilter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      thunk: {
        extraArgument: { userAuthApi, contactsApi },
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userAuthApi.middleware,
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
