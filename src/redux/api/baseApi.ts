import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    credentials: "include",
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: () => ({}),
});
