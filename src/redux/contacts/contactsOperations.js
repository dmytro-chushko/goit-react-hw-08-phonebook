import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as contactsAPI from 'services/contactsAPI';

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['userAuthApi'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: values => ({
        url: '/users/signup',
        method: 'POST',
        body: values,
      }),
      invalidatesTages: ['userAuthApi'],
    }),
    loginUser: builder.mutation({
      query: values => ({
        url: '/users/login',
        method: 'POST',
        body: values,
      }),
      invalidatesTages: ['userAuthApi'],
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userAuthApi;

// export const getContacts = createAsyncThunk(
//   'contacts/getContacts',
//   async () => {
//     try {
//       const contacts = await contactsAPI.getContacts();
//       return contacts;
//     } catch (error) {
//       Notify.failure('Something went wrong');
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async contact => {
//     try {
//       await contactsAPI.addContact(contact);
//       const contacts = await contactsAPI.getContacts();
//       Notify.success('Contact has added');
//       return contacts;
//     } catch (error) {
//       Notify.failure('Something went wrong');
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contact/deleteContact',
//   async id => {
//     try {
//       await contactsAPI.deleteContact(id);
//       const contacts = await contactsAPI.getContacts();
//       Notify.success('Contact has deleted');
//       return contacts;
//     } catch (error) {
//       Notify.failure('Something went wrong');
//     }
//   }
// );
