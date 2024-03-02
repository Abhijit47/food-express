import Button from "./Button";

export default function RecipeCookingProcess({ recipe }) {
  return (
    <div className="mt-8 grid gap-y-4">
      <h2 className="text-center text-2xl font-semibold uppercase text-[#f38e82]">
        How to cook it
      </h2>

      <h3 className="text-center text-lg font-semibold">
        This recipe was carefully designed and tested by{" "}
        <span className="text-xl font-bold">{recipe?.publisher}</span>. Please
        check out directions at their website.
      </h3>

      <div className="flex items-center justify-center gap-x-4 py-8">
        <Button buttonName="Direction" btnHref={recipe?.source_url}>
          Direction
        </Button>
        <Button buttonName="Go back" btnHref={"/recipes"}>
          Go back
        </Button>
      </div>
    </div>
  );
}
