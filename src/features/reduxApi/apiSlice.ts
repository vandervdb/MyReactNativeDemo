// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Note, NoteState} from '../../appTypes';
import {REHYDRATE} from 'redux-persist';

// Define our single API slice object for Notes
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  tagTypes: ['Notes'],
  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getNotes: builder.query<void, void>({
      query: () => {
        return '/notes';
      },
      providesTags: ['Notes'],
    }),
    updateNote: builder.mutation<NoteState, Partial<Note> & Pick<Note, 'id'>>({
      query: ({id, ...patch}) => ({
        url: `notes/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Notes'],
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: {data: NoteState}) => response.data,
      transformErrorResponse: (response: {status: string | number}) =>
        response.status,
    }),
    deleteNote: builder.mutation<NoteState, Partial<Note> & Pick<Note, 'id'>>({
      query: ({id}) => ({
        url: `notes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notes'],
      transformResponse: (response: {data: NoteState}) => response.data,
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {useGetNotesQuery, useUpdateNoteMutation, useDeleteNoteMutation} =
  apiSlice;
