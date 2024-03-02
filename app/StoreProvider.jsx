"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import { fetchRecipe } from "@/lib/actions/recipeActions";

export default function StoreProvider({ children }) {
  const storeRef = useRef();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    //1. load initial data with async thunk
    // storeRef.current.dispatch(
    //   fetchRecipe(storeRef.current.getState().recipe.currentPage.toString()),
    // );
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
