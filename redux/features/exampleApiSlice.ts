import { appServiceApi } from "@/lib/services/appServiceApi";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const exampleApiAdapter = createEntityAdapter();
const initialState = exampleApiAdapter.getInitialState();
export const exampleApiSlice = appServiceApi.injectEndpoints({
  // Define the endpoints for the API service using a builder callback
  // The builder provides methods for defining query and mutation endpoints
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
      transformResponse: async (data: any) => {
        return exampleApiAdapter.setAll(initialState, data ?? []);
      },
    }),

    getNetworkDetails: builder.query({
      queryFn: () => {
        // handle custom async or function callback
        // Return the result in an object with a `data` or `error` field
        return { data: [] };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = exampleApiSlice;

// selecting getUsers response
export const selectAllUsersResult =
  exampleApiSlice.endpoints.getUsers.select("");

// extracting data feild from the result
const selectAllUsersData = createSelector(
  selectAllUsersResult,
  (result) => result.data
);

// creating dynamic selector for the getUsers response
export const { selectAll: selectAllUsers, selectById: selectUserById } =
  exampleApiAdapter.getSelectors(
    (state: any) => selectAllUsersData(state) ?? initialState
  );
