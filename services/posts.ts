import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { postsPaths, PostData } from "@/types/interfaces";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6396aee2a68e43e41808fa18.mockapi.io/api/",
  }),
  endpoints: () => ({}),
});

const postEndpoints = postApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostData[], any>({
      query: () => `/posts`,
    }),
    getPostById: builder.query<PostData, postsPaths>({
      query: ({ id }: postsPaths) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postEndpoints;
