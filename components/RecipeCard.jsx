import Link from "next/link";
import Image from "next/image";

import { DashiconsFood, HeroiconsOutlineClipboardCheck } from "@/assets/icons";
import RecipeCover from "./RecipeCover";

export default function RecipeCard({ recipe }) {
  return (
    <div className="group relative block h-64 sm:h-80 lg:h-96">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform cursor-pointer items-end border-2 border-black bg-white transition-transform delay-75 duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="fixed h-full w-full bg-gradient-to-tr from-amber-800 to-orange-800 opacity-55 group-hover:hidden">
          <RecipeCover
            poster={recipe?.image_url}
            title={recipe?.title}
            coverName="Recipe Cover"
          />
          {/* <Image
            src={recipe?.image_url}
            alt={recipe?.title}
            width={500}
            height={500}
            priority
            className="h-full w-full object-cover opacity-95"
          /> */}
        </div>

        <div
          className={`relative p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8`}
        >
          <DashiconsFood className="size-10 text-stone-700 sm:size-12" />

          <h2 className="mt-4 text-xl font-medium text-stone-800 sm:text-2xl">
            {recipe?.title}
          </h2>
        </div>

        <div className="absolute grid w-full gap-y-1.5 p-1 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 md:gap-y-3 md:p-2 lg:gap-y-6 lg:p-4">
          <h3 className="text-xl font-medium sm:text-2xl">
            {recipe?.title?.length > 25
              ? recipe?.title.slice(0, 25) + " ..."
              : recipe?.title}
          </h3>

          <div className="">
            <dl>
              <dt>Ingredients</dt>
              {recipe?.ingredients?.slice(0, 8)?.map((ingredient) => (
                <dd key={ingredient._id} className="flex items-center gap-x-2">
                  <HeroiconsOutlineClipboardCheck className="size-4 text-amber-600" />
                  <span className="capitalize xs:text-xs md:text-sm">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="capitalize xs:text-xs md:text-sm">
                    {ingredient.description.length > 10
                      ? ingredient.description.substring(0, 30) + " ..."
                      : ingredient.description}
                  </span>
                </dd>
              ))}
            </dl>
          </div>

          <div className="flex w-full items-center justify-between justify-self-center">
            <Link
              href={recipe?.source_url}
              className="font-bold underline underline-offset-2 hover:no-underline"
            >
              Publisher
            </Link>
            <Link
              href={`recipes/${recipe?._id}`}
              className="font-bold underline underline-offset-2 hover:no-underline"
            >
              Know more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
