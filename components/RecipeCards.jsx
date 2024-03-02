import Image from "next/image";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { getRecipes } from "@/lib/action";
import RecipeCover from "./RecipeCover";

export default async function RecipeCards() {
  const response = await getRecipes();
  const data = await JSON.parse(response);
  const recipes = data.reverse().slice(0, 9);

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        <div className="space-y-4 sm:space-y-4">
          <SectionHeading>Delicious Recipes for Every Palate</SectionHeading>
          <SectionSubHeading>
            Explore our wide range of mouthwatering recipes and discover the joy
            of cooking in the comfort of your own kitchen
          </SectionSubHeading>
        </div>
        <ul className="cursor-pointer space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          <RecipeCard recipes={recipes} />
        </ul>

        <div className="flex items-center justify-center py-6">
          <Button buttonName="See More" btnHref={"/recipes"}>
            See more
          </Button>
        </div>
      </div>
    </div>
  );
}

function RecipeCard({ recipes }) {
  return (
    <>
      {recipes?.slice(0, 9)?.map((recipe, idx) => (
        <li
          key={idx}
          className="rounded-lg bg-white px-6 py-10 text-center shadow-lg ring-1 ring-amber-400 transition-shadow delay-75 duration-500 ease-in-out  hover:shadow xl:px-10 xl:text-left"
        >
          <div className="space-y-6 overflow-hidden xl:space-y-10">
            <RecipeCover
              poster={recipe?.image_url}
              title={recipe?.title}
              coverName="Recipe Card"
            />
            {/* <Image
              className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
              src={recipe?.image_url}
              alt={recipe?.title}
              height={1024}
              width={1024}
              priority={true}
            /> */}
            <div className="flex w-full items-center justify-center space-y-2">
              <div className="space-y-1 text-center text-lg font-medium leading-6">
                <h3 className="text-slate-600">{recipe?.title}</h3>
                <p className="text-indigo-400">{recipe?.publisher}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
