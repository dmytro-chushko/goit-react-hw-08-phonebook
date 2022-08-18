import { persistReducer } from 'redux-persist';
// import { store } from 'redux/store';
import { slice } from './authSlice';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  authPersistConfig,
  slice.reducer
);

// export const persistor = persistStore(store);
