// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const rootApi = createApi({
  reducerPath: "rootApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://cardanomaze.onrender.com/" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/" }),
  endpoints: (builder) => ({}),
});
