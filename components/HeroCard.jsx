import Image from "next/image";
import Link from "next/link";

import HeroBG from "@/public/hero-bg-2.avif";

export default function HeroCard() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src={HeroBG}
              alt="Food making image"
              width={2070}
              height={1380}
              placeholder="blur"
              blurDataURL={HeroBG.blurDataURL}
            />
            <div className="absolute inset-0 bg-amber-600 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Welcome to Food Express</span>
              <span className="block text-amber-200">
                Delicious Meals make at Your Home
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
              Welcome to our food recipe app, where you can embark on a
              gastronomic adventure like no other. Immerse yourself in a world
              of tantalizing flavors, innovative techniques, and irresistible
              aromas. From classic comfort foods to exotic delicacies, our app
              is your gateway to a culinary wonderland.
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-amber-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                >
                  Get started
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-amber-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                >
                  Live demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
