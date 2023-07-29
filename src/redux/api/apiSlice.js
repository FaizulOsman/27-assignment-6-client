import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://book-schema.vercel.app/api/v1',
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["pc-builder"],
  endpoints: () => ({}),
});

export default apiSlice;
