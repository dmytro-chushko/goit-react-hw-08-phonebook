import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
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
  tagTypes: ['User'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => ({ url: '/users/current' }),
      providesTags: ['User'],
    }),
    registerUser: builder.mutation({
      query: values => ({
        url: '/users/signup',
        method: 'POST',
        body: values,
      }),
      invalidatesTages: ['User'],
    }),
    loginUser: builder.mutation({
      query: values => ({
        url: '/users/login',
        method: 'POST',
        body: values,
      }),
      invalidatesTages: ['User'],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTages: ['User'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogOutUserMutation,
} = userAuthApi;
