import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CurrentTeamResponse } from '../features/team-page/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getTeam: builder.query<CurrentTeamResponse, string>({
      query: (token) => ({
        url: 'team',
        headers: {
          Authorization: `bearer ${token}`,
        },
      }),
    }),
    deleteTeam: builder.mutation<void, number>({
      query: (id) => ({
        url: `/teams/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      }),
    }),
  }),
});

export const apiReducer = apiSlice.reducer;
export const { useGetTeamQuery, useDeleteTeamMutation } = apiSlice;
