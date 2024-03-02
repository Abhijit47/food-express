"use client";

import {
  HeroiconsOutlineBookmark,
  HeroiconsOutlineClock,
  HeroiconsOutlineMinusCircle,
  HeroiconsOutlinePlusCircle,
  HeroiconsOutlineUserGroup,
} from "@/assets/icons";
import { updateCookingTime, updateServings } from "@/lib/features/recipeSlice";
import { useAppDispatch } from "@/lib/hooks";

export default function RecipeNavigation({ recipe }) {
  const dispatch = useAppDispatch();

  function handleIncrementServing() {
    dispatch(updateServings(recipe?.servings + 1));
    dispatch(updateCookingTime(recipe?.servings));
  }

  function handleDecrementServing() {
    if (recipe?.servings <= 1) {
      return dispatch(updateServings(1));
    }
    dispatch(updateServings(recipe?.servings - 1));
    dispatch(updateCookingTime(recipe?.servings));
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-center gap-x-8 py-12">
        <div className="flex items-center gap-x-2">
          <HeroiconsOutlineClock className="size-6 text-[#f38e82]" />
          <span> {recipe?.cooking_time?.toFixed(0)} minutes</span>
        </div>
        <div className="flex items-center gap-x-2">
          <HeroiconsOutlineUserGroup className="size-6 text-[#f38e82]" />
          <span>{recipe?.servings} servings</span>
        </div>

        <div className="flex items-center gap-x-2">
          <button onClick={handleDecrementServing}>
            <HeroiconsOutlineMinusCircle className="size-6 text-[#f38e82]" />
          </button>
          <button onClick={handleIncrementServing}>
            <HeroiconsOutlinePlusCircle className="size-6 text-[#f38e82]" />
          </button>
        </div>

        <div>
          <button className="bookmark-btn flex items-center gap-x-2 rounded-full">
            <span>
              <HeroiconsOutlineBookmark className="size-5 text-[#fbdb89]" />
            </span>
            <span className="sr-only">Add Bookmark</span>
          </button>
        </div>
      </div>
    </div>
  );
}
