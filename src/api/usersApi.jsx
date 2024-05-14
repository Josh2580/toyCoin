import { rootApi } from "./rootApi";

const usersApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => `telegram/all/`,
      providesTags: ["TelegramUser"],
    }),
    getTelegramUser: build.query({
      query: (telegram_id) => `telegram/all/${telegram_id}/`,
      providesTags: ["TelegramUser"],
    }),
    createTelegramUser: build.mutation({
      query: ({ formData }) => ({
        url: `telegram/all/`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["TelegramUser"],
    }),
  }),
  //   overrideExisting: false,
});

export const {
  useCreateTelegramUserMutation,
  useGetTelegramUserQuery,
  useGetAllUsersQuery,
} = usersApi;
