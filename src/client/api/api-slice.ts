import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CurrentTeamResponse } from '../features/team/types';

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
  }),
});

export const apiReducer = apiSlice.reducer;
export const { useGetTeamQuery } = apiSlice;
