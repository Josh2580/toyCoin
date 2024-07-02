// Need to use the React-specific entry point to import createApi
import { rootApi } from "./rootApi";

// Define a service using a base URL and expected endpoints
export const autoBotApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFreeAutoBot: builder.query({
      query: () => `task/bot/`,
      // providesTags: ["Task"],
      providesTags: (result, error, id) =>
        result
          ? [
              ...result.map((task) => ({ type: "AutoBot", id: autoBot.id })),
              "AutoBot",
            ]
          : ["AutoBot"],
    }),
    getFreeAutoBotById: builder.query({
      query: (id) => `task/bot/${id}/`,
      //   providesTags: (result, error, id) => [{ type: "AutoBot", id }],
      providesTags: ["AutoBot"],
    }),
    createFreeAutoBot: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ formData }) => ({
        url: `task/bot/`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "AutoBot", id }],
    }),
    addFreeAutoBotById: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ id, formData }) => ({
        url: `task/bot/${id}/`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "AutoBot", id },
        "AutoBot",
      ],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddFreeAutoBotByIdMutation,
  useCreateFreeAutoBotMutation,
  useGetAllFreeAutoBotQuery,
  useGetFreeAutoBotByIdQuery,
} = autoBotApi;
