"use client";

import { SvgSpinners3DotsScale } from "@/assets/icons";
import RecipeCookingProcess from "@/components/RecipeCookingProcess";
import RecipeFigure from "@/components/RecipeFigure";
import RecipeIngredients from "@/components/RecipeIngredients";
import RecipeNavigation from "@/components/RecipeNavigation";
import { loadRecipe } from "@/lib/features/recipeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetRecipeQuery } from "@/lib/services/recipeService";
import { useEffect } from "react";

export default function RecipePage({ params }) {
  const dispatch = useAppDispatch();

  const { recipe } = useAppSelector((state) => state.recipe);

  const { data, isFetching, isLoading, isError, error } = useGetRecipeQuery(
    params.id,
  );

  useEffect(() => {
    if (data) {
      const { status, message, data: recipe } = data;
      dispatch(loadRecipe(recipe));
    }
  }, [dispatch, isFetching, isLoading, data]);

  if (isFetching || isLoading) {
    return (
      <div className="grid h-screen place-items-center">
        <SvgSpinners3DotsScale className="size-10 text-stone-700 md:size-20 lg:size-36" />
      </div>
    );
  }

  return (
    <article className="grid gap-y-8 rounded-md lg:py-16">
      <RecipeFigure recipe={recipe} />

      <RecipeNavigation recipe={recipe} />

      <RecipeIngredients recipe={recipe} />

      <RecipeCookingProcess recipe={recipe} />
    </article>
  );
}
