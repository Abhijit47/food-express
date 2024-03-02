import {
  HeroiconsOutlineChevronLeft,
  HeroiconsOutlineChevronRight,
} from "@/assets/icons";

export default function Pagination() {
  return (
    <nav
      aria-label="Pagination"
      className="inline-flex -space-x-px rounded-md shadow-sm"
    >
      <button
        type="button"
        className="inline-flex items-center rounded-l-md border px-2 py-2 text-sm font-semibold"
      >
        <span className="sr-only">Previous</span>
        <HeroiconsOutlineChevronLeft className="size-5 text-stone-600 hover:text-stone-500" />
      </button>
      <button
        type="button"
        aria-current="page"
        className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
      >
        1
      </button>
      <button
        type="button"
        className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
      >
        2
      </button>
      <button
        type="button"
        className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
      >
        3
      </button>
      <button
        type="button"
        className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
      >
        ...
      </button>
      <button
        type="button"
        className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
      >
        7
      </button>
      <button
        type="button"
        className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
      >
        8
      </button>
      <button
        type="button"
        className="inline-flex items-center border px-4 py-2 text-sm font-semibold"
      >
        9
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-r-md border px-2 py-2 text-sm font-semibold"
      >
        <span className="sr-only">Next</span>
        <HeroiconsOutlineChevronRight className="size-5 text-stone-600 hover:text-stone-500" />
      </button>
    </nav>
  );
}
