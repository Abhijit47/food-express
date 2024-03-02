import Link from "next/link";
import Image from "next/image";

import imgSrc from "@/public/hero-bg.avif";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col bg-white">
      <Image
        src={imgSrc}
        alt="not-found-page"
        className="h-64 w-full object-cover"
        height={1380}
        width={2070}
        placeholder="blur"
        blurDataURL={imgSrc.blurDataURL}
      />

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We can&apos;t find that page.
          </h1>

          <p className="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
