"use client";

import { useState, useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { loadSearchResults, setSearchQuery } from "@/lib/features/recipeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetRecipesBySearchQuery } from "@/lib/services/recipeService";
import { SvgSpinners3DotsScale } from "@/assets/icons";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const page = searchParams.get("page");

  const { data, isFetching, isLoading, isError, error } =
    useGetRecipesBySearchQuery(searchQuery);

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  // const createQueryString = useCallback(
  //   (query = "", value = "") => {
  //     const params = new URLSearchParams(searchParams.toString());
  //     params.set(query, value);

  //     return params.toString();
  //   },

  //   [searchParams],
  // );

  function handleSearchQuery(query) {
    // dispatch(setSearchQuery(query));
    setSearchQuery(query);
    // if (!page) {
    //   router.push("?" + createQueryString("q", query));
    // } else {
    //   router.push(
    //     pathname.replace("/recipes", "/recipes") +
    //       "&" +
    //       createQueryString("q", query),
    //     // router.push(pathname + "?" + createQueryString("sort", "asc")),
    //   );
    // }
    if (data) {
      dispatch(loadSearchResults(data));
    }
  }

  // useEffect(() => {
  //   if (data) {
  //     dispatch(loadSearchResults(data));
  //   }
  // }, [data, dispatch]);

  // if (isFetching || isLoading) {
  //   return (
  //     <div className="grid h-screen place-items-center">
  //       <SvgSpinners3DotsScale className="size-32 text-[#f38e82]" />
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="text-center text-xl font-bold text-red-500">
  //       Something went wrong...
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Quick search
        </label>
        <div className="relative mt-1 flex items-center">
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
            onChange={(e) => handleSearchQuery(e.target.value)}
            onKeyDown={(e) => handleSearchQuery(e.target.value)}
            placeholder="Enter recipe name ..."
            // defaultValue={"pizza"}
            value={searchQuery}
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* {isError && (
        <p className="text-center text-sm text-red-500">
          {error?.data?.message}
        </p>
      )} */}
    </div>
  );
}
