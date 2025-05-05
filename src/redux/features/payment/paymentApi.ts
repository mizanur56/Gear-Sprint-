import { baseApi } from "../../api/baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation({
      query: (data) => ({
        url: "/payments/create-payment-intent",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentApi;
