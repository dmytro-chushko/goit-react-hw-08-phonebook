import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: '/contacts' }),
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTages: ['Contacts'],
    }),
    updatingContact: builder.mutation({
      query: (id, values) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: values,
      }),
      invalidatesTages: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTages: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useUpdatingContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;

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
