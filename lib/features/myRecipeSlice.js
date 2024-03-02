import { createSlice } from "@reduxjs/toolkit";

const initialRecipeSlice = {
  recipes: [],
  recipe: {},
  status: "",
  message: "",
};

const myRecipeSlice = createSlice({
  name: "myRecipe",
  initialState: initialRecipeSlice,
  reducers: {
    loadRecipes: (state, action) => {
      const { data, status, message } = action.payload;
      state.recipes = [];
      state.recipes.push(...data);
      state.status = status;
      state.message = message;
    },

    loadRecipe: (state, action) => {
      state.recipe = action.payload;
    },

    updateServings: (state, action) => {
      state.recipe.ingredients.forEach((ingredient) => {
        ingredient.quantity =
          (ingredient.quantity * action.payload) / state.recipe.servings;
        // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
      });

      state.recipe.servings = action.payload;
    },

    updateCookingTime: (state, action) => {
      // calculate current time per head
      //  120min 4 serving
      //  120min / 4 = 30min per head
      //  120min / 2 = 60min per head
      //  120min / 8 = 15min per head
      // const timePerHead = state.recipe.cooking_time / action.payload; //120/4 30 per head
      // console.log(timePerHead);
      // state.recipe.cooking_time = state.recipe.cooking_time - timePerHead; // serving count
    },

    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
    },

    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== action.payload.id,
      );
    },
  },
});

export const {
  loadRecipe,
  loadRecipes,
  addBookmark,
  removeBookmark,
  updateServings,
  updateCookingTime,
} = myRecipeSlice.actions;

export default myRecipeSlice.reducer;
