import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IPost } from "../interfaces/posts";

const postAPI = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: (limit = 5) => ({
        url: `/posts`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ["Post"],
    }),
    // createPost: build.mutation<IPost, IPost>({
    //     query: (post) => ({
    //         url: `/posts`,
    //         method: 'POST',
    //         body: post
    //     }),
    //     invalidatesTags: ['Post']
    // }),
    // updatePost: build.mutation<IPost, IPost>({
    //     query: (post) => ({
    //         url: `/posts/${post.id}`,
    //         method: 'PUT',
    //         body: post
    //     }),
    //     invalidatesTags: ['Post']
    // }),
    // deletePost: build.mutation<IPost, IPost>({
    //     query: (post) => ({
    //         url: `/posts/${post.id}`,
    //         method: 'DELETE',
    //     }),
    //     invalidatesTags: ['Post']
    // }),
  }),
});
export default postAPI;
