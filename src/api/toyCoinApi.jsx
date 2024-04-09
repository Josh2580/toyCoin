// Need to use the React-specific entry point to import createApi
import { rootApi } from "./rootApi";

// Define a service using a base URL and expected endpoints
export const toyCoinApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getToyCoin: builder.query({
      query: () => `toycoin/`,
    }),
    getToyCoinById: builder.query({
      query: (id) => `toycoin/${id}/`,
      providesTags: (result, error, id) => [{ type: "ToyCoin", id }],
    }),
    claimToyById: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ id, formData }) => ({
        url: `toycoin/${id}/`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "ToyCoin", id }],
    }),
    createToy: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ formData }) => ({
        url: `toycoin/`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "ToyCoin", id }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetToyCoinQuery,
  useGetToyCoinByIdQuery,
  useClaimToyByIdMutation,
  useCreateToyMutation,
} = toyCoinApi;
