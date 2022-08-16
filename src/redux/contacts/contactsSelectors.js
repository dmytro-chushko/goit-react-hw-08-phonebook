export const getContactsSelector = state => state.contacts.items;
export const getPending = state => state.contacts.isLoading;
export const getFilterSelector = state => state.contacts.filter;
export const getIsLoggedIn = state => state.isLoggedIn;
export const getUserName = state => state.userName;
