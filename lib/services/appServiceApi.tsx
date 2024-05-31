import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API service using the createApi function
export const appServiceApi = createApi({
  reducerPath: "appServiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: () => ({}),
});
