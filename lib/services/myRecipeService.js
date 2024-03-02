import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myRecipeApi = createApi({
  reducerPath: "myRecipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/my-recipe" }),
  tagTypes: ["MyRecipe"],

  endpoints: (builder) => ({
    getAllMyRecipe: builder.query({
      query: () => "/",
      providesTags: ["MyRecipe"],
    }),

    getOneRecipe: builder.query({
      query: (id) => `/${id}`,
    }),

    updateRecipe: builder.mutation({
      query: (recipe) => ({
        url: "/",
        method: "PATCH",
        body: JSON.stringify(recipe),
      }),
      invalidatesTags: ["MyRecipe"],
    }),

    deleteRecipe: builder.mutation({
      query: (id) => ({
        url: "/",
        method: "DELETE",
        body: JSON.stringify(id),
      }),
      invalidatesTags: ["MyRecipe"],
    }),
  }),
});

export const {
  useGetAllMyRecipeQuery,
  useGetOneRecipeQuery,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = myRecipeApi;
