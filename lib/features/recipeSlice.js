import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipe } from "../actions/recipeActions";
// import { useQuery } from "@reduxjs/toolkit/query/react";

const RES_PER_PAGE = 12;

const initialRecipeSlice = {
  recipes: [],
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  searchQuery: "",
  bookmarks: [],
  status: "",
  message: "",
  currentPage: 0,
  currentResult: 0,
  totalPage: 0,
  totalRecord: 0,
  isError: false,
  isPending: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialRecipeSlice,
  reducers: {
    loadRecipes: (state, action) => {
      const {
        data,
        status,
        message,
        currentPage,
        currentResult,
        totalPage,
        totalRecord,
      } = action.payload;
      state.recipes = [];
      state.recipes.push(...data);
      state.status = status;
      state.message = message;
      state.currentPage = currentPage;
      state.currentResult = currentResult;
      state.totalPage = totalPage;
      state.totalRecord = totalRecord;
    },

    loadRecipe: (state, action) => {
      state.recipe = action.payload;
    },

    setSearchQuery: (state, action) => {
      // state.search.query = action.payload;
      state.searchQuery = action.payload;
    },

    loadSearchResults: (state, action) => {
      const {
        data,
        status,
        message,
        currentPage,
        currentResult,
        totalPage,
        totalRecord,
      } = action.payload;
      state.recipes = [];
      state.recipes.push(...data);
      state.status = status;
      state.message = message;
      state.currentPage = currentPage;
      state.currentResult = currentResult;
      state.totalPage = totalPage;
      state.totalRecord = totalRecord;
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

  // With Async Thunk

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchRecipe.pending, (state, action) => {
  //       state.isPending = true;
  //       state.isError = false;
  //     })
  //     .addCase(fetchRecipe.rejected, (state, action) => {
  //       state.isError = true;
  //       state.isPending = false;
  //     })
  //     .addCase(fetchRecipe.fulfilled, (state, action) => {
  //       const {
  //         data,
  //         status,
  //         message,
  //         currentPage,
  //         currentResult,
  //         totalPage,
  //         totalRecord,
  //       } = action.payload;
  //       state.recipes = [];
  //       state.recipes.push(...data);
  //       state.status = status;
  //       state.message = message;
  //       state.currentPage = currentPage;
  //       state.currentResult = currentResult;
  //       state.totalPage = totalPage;
  //       state.totalRecord = totalRecord;
  //     });
  // },
});

export const {
  loadRecipe,
  loadRecipes,
  loadSearchResults,
  addBookmark,
  removeBookmark,
  updateServings,
  updateCookingTime,
  changeSearchParam,
  setSearchQuery,
} = recipeSlice.actions;

export default recipeSlice.reducer;
