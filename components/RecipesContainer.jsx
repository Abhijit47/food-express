"use client";

import { useEffect } from "react";

import { SvgSpinners3DotsScale } from "@/assets/icons";
import Paginate from "@/components/Paginate";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";
import { loadRecipes } from "@/lib/features/recipeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetRecipesQuery } from "@/lib/services/recipeService";

export default function RecipesContainer({ searchParams }) {
  const dispatch = useAppDispatch();

  const { data, isFetching, isLoading, isError, error } = useGetRecipesQuery(
    searchParams.page ?? 1,
    // this overrules the api definition setting,
    // forcing the query to always fetch when this component is mounted
    {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    },
  );

  // Initialize the store with the product information
  // const store = useAppStore();
  // const initialized = useRef(false);
  // if (!initialized.current) {
  //   // store.dispatch(fetchRecipe(currentPage));
  //   initialized.current = true;
  // }

  useEffect(() => {
    if (data) {
      dispatch(loadRecipes(data));
    }
  }, [data, dispatch]);

  const state = useAppSelector((state) => state);

  if (isFetching || isLoading) {
    return (
      <div className="grid h-screen place-items-center">
        <SvgSpinners3DotsScale className="size-10 text-stone-700 md:size-20 lg:size-36" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-xl font-bold text-red-500">
        Something went wrong...
      </div>
    );
  }
  const { currentPage, totalPage } = data;

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 md:px-4">
        {/* Search bar */}
        <SearchBar />
      </div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {state?.recipe?.recipes?.map((recipe) => (
            <div key={recipe?._id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-y-4 py-8">
          <p className="text-lg font-medium text-stone-600">
            Showing page {currentPage} of {totalPage}
          </p>
          <Paginate />
        </div>
      </div>
    </>
  );
}
