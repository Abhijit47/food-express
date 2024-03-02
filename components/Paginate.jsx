"use client";

import React, { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  HeroiconsOutlineChevronLeft,
  HeroiconsOutlineChevronRight,
} from "@/assets/icons";

import { useAppSelector } from "@/lib/hooks";

export default function Paginate() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (query = "", value = "") => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(query, value);

      return params.toString();
    },
    [searchParams],
  );

  const { currentPage, totalPage: totalPages } = useAppSelector(
    (state) => state.recipe,
  );

  function handlePageChange(page) {
    if (
      Object.keys(new URLSearchParams(searchParams.toString())).length === 0
    ) {
      router.push("?" + createQueryString("page", 2));
    }
    if (totalPages === page) {
      router.push("?" + createQueryString("page", "1"));
    }
    router.push("?" + createQueryString("page", page));
  }

  function renderPages() {
    const pages = [];
    const maxPages = 5; // Maximum number of pages to display

    if (totalPages <= maxPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            type="button"
            className={`inline-flex items-center border px-4 py-2 text-sm font-semibold ${
              currentPage === i ? "bg-amber-200" : ""
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>,
        );
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
      const endPage = Math.min(totalPages, startPage + maxPages - 1);

      if (startPage > 1) {
        pages.push(
          <button
            key="first"
            type="button"
            className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
            onClick={() => handlePageChange(1)}
          >
            1
          </button>,
        );
        pages.push(
          <button
            key="dots-start"
            type="button"
            className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
            disabled
          >
            ...
          </button>,
        );
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            type="button"
            className={`inline-flex items-center border px-4 py-2 text-sm font-semibold ${
              currentPage === i ? "bg-amber-200" : ""
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>,
        );
      }

      if (endPage < totalPages) {
        pages.push(
          <button
            key="dots-end"
            type="button"
            className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
            disabled
          >
            ...
          </button>,
        );
        pages.push(
          <button
            key="last"
            type="button"
            className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>,
        );
      }
    }

    return pages;
  }

  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="inline-flex items-center rounded-l-md border px-2 py-2 text-sm font-semibold"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="sr-only">Previous</span>
        <HeroiconsOutlineChevronLeft className="size-5 text-stone-600 hover:text-stone-500" />
      </button>
      {renderPages()}
      <button
        type="button"
        className="inline-flex items-center rounded-r-md border px-2 py-2 text-sm font-semibold"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Next</span>
        <HeroiconsOutlineChevronRight className="size-5 text-stone-600 hover:text-stone-500" />
      </button>
    </div>
  );
}
