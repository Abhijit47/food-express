import { HeroiconsOutlineClipboardCheck } from "@/assets/icons";

export default function RecipeIngredients({ recipe }) {
  return (
    <div className="mt-8 grid gap-y-4">
      <h2 className="text-center text-2xl font-semibold uppercase text-[#f38e82]">
        Recipe Ingredients
      </h2>

      <ul className="grid-col-1 mx-auto grid max-w-5xl items-center gap-4 lg:grid-cols-2">
        {recipe?.ingredients?.map((ingredient) => (
          <li key={ingredient?._id} className="">
            <div className="flex items-center gap-x-1">
              <span className="inline-flex size-8 items-center">
                <HeroiconsOutlineClipboardCheck className="text-[#f38e82]" />
              </span>
              <span className="text-balance text-sm">
                {ingredient?.quantity === null
                  ? 0
                  : ingredient?.quantity.toFixed(1)}
              </span>
              <span className="text-sm">
                {ingredient?.unit === "" ? "" : ingredient?.unit}
              </span>
              <span className="text-sm">{ingredient?.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
