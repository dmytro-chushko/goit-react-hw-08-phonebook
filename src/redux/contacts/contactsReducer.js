import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { contactsOperations, contactsActions } from 'redux/contacts';

const { getContacts, addContact, deleteContact } = contactsOperations;

const items = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (_, action) => action.payload,
  [deleteContact.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(false, {
  [getContacts.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
});

const filter = createReducer('', {
  [contactsActions.setFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});
