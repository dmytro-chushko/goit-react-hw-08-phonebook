import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contactsFilter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = slice.actions;
export const filterReducer = slice.reducer;
