// Need to use the React-specific entry point to import createApi
import { rootApi } from "./rootApi";

// Define a service using a base URL and expected endpoints
export const taskApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTask: builder.query({
      query: () => `task/all/`,
      providesTags: (result, error, id) => [{ type: "Task", id }],
    }),
    getTaskById: builder.query({
      query: (id) => `task/all/${id}/`,
      providesTags: (result, error, id) => [{ type: "Task", id }],
    }),
    addTaskById: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ id, formData }) => ({
        url: `task/all/${id}/`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Task", id }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTaskQuery,
  useGetTaskByIdQuery,
  useAddTaskByIdMutation,
} = taskApi;
