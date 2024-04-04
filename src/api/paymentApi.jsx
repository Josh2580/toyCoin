import { rootApi } from "./rootApi";

const paymentApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    telegramWebhook: build.query({
      query: () => `telegram/webhook/`,
      providesTags: ["TelegramUser"],
    }),
    getTelegramUser: build.query({
      query: (id) => `telegram/all/${user_id}/`,
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
    createOrder: build.mutation({
      query: ({ formData, user_id }) => ({
        url: `telegram/all/${user_id}/order/`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["TelegramUser", "Order"],
    }),
    createInvoice: build.mutation({
      query: ({ user_id, order_id }) => ({
        url: `telegram/all/${user_id}/order/${order_id}/invoice/`,
        method: "POST",
        // body: formData,
      }),
      invalidatesTags: ["TelegramUser", "Order"],
    }),
  }),
  //   overrideExisting: false,
});

export const {
  useCreateInvoiceMutation,
  useCreateOrderMutation,
  useCreateTelegramUserMutation,
  useGetTelegramUserQuery,
  useTelegramWebhookQuery,
} = paymentApi;
