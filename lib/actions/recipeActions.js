import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipe = createAsyncThunk(
  "recipe/fetchRecipe",
  async (page) => {
    const response = await fetch(`/api/recipes?page=${page}&limit=12}`);
    const data = await response.json();
    return data;
  },
);
