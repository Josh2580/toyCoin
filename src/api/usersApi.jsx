import { rootApi } from "./rootApi";

const usersApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
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

export const { useCreateTelegramUserMutation, useGetTelegramUserQuery } =
  usersApi;
