import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../config/dataService";

// Define a service using a base URL and expected endpoints

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};
export const sustainabilitiesApi = createApi({
  reducerPath: "sustainabilitiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers,
  }),
  tagTypes: ["sustainabilities"],
  endpoints: (builder) => ({
    sustainabilities: builder.query({
      query: () => "sustainabilities",
      providesTags: ["sustainabilities"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSustainabilitiesQuery } = sustainabilitiesApi;