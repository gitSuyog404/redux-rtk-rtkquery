import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import axios from "axios";

const apiSlice = createApi({
  reducerPath: "todoGet",
  // keepUnusedDataFor: 2,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["AddTodo", "GetAllTodoTag"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    prepareHeaders: (header) => {
      header.set("key", "value");
      header.set("2", "value");
      header.set("3", "value");
      return header;
    },
  }),

  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        headers: {
          Authorization: "adasdad",
        },
        query: () => {
          return `https://dummyjson.com/todos`;
        },
        providesTags: ["GetAllTodoTag"],
        transformResponse: function (data) {
          return data?.todos || [];
        },
      }),
      getTodo: builder.query({
        query: (id) => {
          return `https://dummyjson.com/todos/${id}`;
        },
      }),
      addTodo: builder.mutation({
        query: (params) => {
          return { url: "/todos/add", method: "POST", body: params };
        },
        invalidatesTags: ["GetAllTodoTag"],
        // this will invalidate the tag and the data will be fetched
      }),
    };
  },
});

export default apiSlice;

export const { useGetAllTodosQuery, useLazyGetTodoQuery, useAddTodoMutation } =
  apiSlice;
