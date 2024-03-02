"use client";

import { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useGetAllMyRecipeQuery } from "@/lib/services/myRecipeService";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { SvgSpinners3DotsScale } from "@/assets/icons";
import { loadRecipes } from "@/lib/features/myRecipeSlice";
import { calcDayMonth, calcYear } from "@/lib/helpers";

import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import RecipeCover from "./RecipeCover";

export default function MyRecipeCard() {
  const dispatch = useAppDispatch();

  const { data, isFetching, isLoading, isError, error } =
    useGetAllMyRecipeQuery("", {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    });

  useEffect(() => {
    if (data) {
      dispatch(loadRecipes(data));
    }
  }, [data, dispatch]);

  const { recipes } = useAppSelector((state) => state.myRecipe);

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

  return (
    <div className="grid gap-y-8 py-4 xs:py-6 md:py-10 lg:py-16">
      {recipes?.length <= 0 ? (
        <h3 className="text-center text-sm font-normal text-stone-700 xs:text-base xs:font-medium md:text-xl lg:text-2xl lg:font-semibold">
          You have no recipes yet, feel free to create some delicious recipes
        </h3>
      ) : (
        <>
          {recipes?.map((recipe) => (
            <article
              key={recipe?._id}
              className="flex bg-white transition hover:shadow-xl"
            >
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime={new Date(recipe?.createdAt).toDateString()}
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>{calcYear(recipe?.createdAt)}</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>{calcDayMonth(recipe?.createdAt)}</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <RecipeCover
                  poster={recipe?.image_url}
                  title={recipe?.title}
                  coverName="User"
                />
                {/* <Image
              alt=""
              src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              className="aspect-square h-full w-full object-cover"
              width={1740}
              height={1080}
            /> */}
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <div className="flex items-center justify-between">
                    <Link href={`recipes/${recipe?._id}`}>
                      <h3 className="font-bold uppercase text-gray-900">
                        {recipe?.title}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-x-2">
                      <EditButton recipe={recipe} />

                      <DeleteButton recipe={recipe} />
                    </div>
                  </div>

                  <p className="mt-2 text-sm/relaxed text-gray-700">
                    Prepare Time: <span>{recipe?.cooking_time} min</span>
                  </p>
                  <p className="mt-2 text-sm/relaxed text-gray-700">
                    Servings: <span>{recipe?.servings} guests</span>
                  </p>
                  <p className="mt-2 text-sm/relaxed text-gray-700">
                    Publisher:{" "}
                    <Link href={recipe?.source_url} className="text-blue-500">
                      {recipe?.publisher}
                    </Link>
                  </p>

                  <p className="mt-2 text-sm/relaxed text-gray-700">
                    Ingredients:{" "}
                    {recipe?.ingredients?.map((items) =>
                      Object.entries(items).map((ing) => (
                        <span key={ing[0]} className="truncate">
                          {ing[1]}{" "}
                        </span>
                      )),
                    )}
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <Link
                    href={`recipes/${recipe?._id}`}
                    className="block rounded-tl-2xl bg-amber-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-amber-400"
                  >
                    Know more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </>
      )}
    </div>
  );
}
