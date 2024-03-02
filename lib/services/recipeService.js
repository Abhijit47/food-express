import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/recipes" }),
  tagTypes: ["Recipes"],

  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (page) => `?page=${page.toString()}&limit=12`,
      providesTags: ["Recipes"],
    }),

    getRecipe: builder.query({
      query: (id) => `/${id}`,
    }),

    getRecipesBySearch: builder.query({
      query: (search) => `?q=${search ?? "pizza"}`,
      providesTags: ["Recipes"],
    }),

    createRecipe: builder.mutation({
      query: (recipe) => ({
        url: "/",
        method: "POST",
        body: JSON.stringify(recipe),
      }),
      invalidatesTags: ["Recipes"],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeQuery,
  useGetRecipesBySearchQuery,
  useCreateRecipeMutation,
} = recipeApi;
