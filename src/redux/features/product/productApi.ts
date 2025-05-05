import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (id: string) => `/products/${id}`,
    }),
    createProduct: builder.mutation({
      query: (data: any) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
