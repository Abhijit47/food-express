import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./features/recipeSlice";
import myRecipeSlice from "./features/myRecipeSlice";
import { middleware } from "./middleware";
import { recipeApi } from "./services/recipeService";
import { myRecipeApi } from "./services/myRecipeService";

export function makeStore() {
  return configureStore({
    reducer: {
      recipe: recipeSlice,
      myRecipe: myRecipeSlice,
      [recipeApi.reducerPath]: recipeApi.reducer,
      [myRecipeApi.reducerPath]: myRecipeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        // middleware,
        recipeApi.middleware,
        myRecipeApi.middleware,
      ),
  });
}
