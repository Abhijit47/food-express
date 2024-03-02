"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { HeroiconsOutlineCloudUpload } from "@/assets/icons";
import IngredientsForm from "./IngredientsForm";
import RecipeForm from "./RecipeForm";
import { useCreateRecipeMutation } from "@/lib/services/recipeService";
import { createIngredients } from "@/lib/helpers";
import Button from "./Button";

export default function CreateRecipeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [createRecipe, { data, isLoading, isError, error }] =
    useCreateRecipeMutation();

  async function onSubmit(newRecipe) {
    const ingredients = createIngredients(newRecipe);

    if (
      ingredients.includes(
        "Wrong ingredient format! Please use the correct format :)",
      )
    ) {
      toast.warning(
        "Wrong ingredient format! Please use the correct format 😊",
      );
      return;
    }

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.source_url,
      image_url: newRecipe.image_url,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cooking_time,
      servings: +newRecipe.servings,
      ingredients,
    };

    const res = await createRecipe(recipe);

    if (res.data.status === "success") {
      toast.success(res.data.status, {
        position: "bottom-center",
        closeButton: true,
      });
      reset();
      router.replace("/recipes");
    } else {
      toast.error("Something went wrong");
      reset();
      router.replace("/");
    }
  }

  //https://www.smashingmagazine.com/2023/02/comparing-react-form-libraries/
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-10 grid gap-y-6 lg:my-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2 sm:space-y-5">
              <h3 className="text-lg font-medium uppercase leading-6 text-gray-900">
                Recipe Data
              </h3>
              {/* Form 1 */}
              <RecipeForm register={register} errors={errors} />
            </div>
            <div className="space-y-2 sm:space-y-5">
              <h3 className="text-lg font-medium uppercase leading-6 text-gray-900">
                Ingredients Data
              </h3>
              {/* Form 2 */}
              <IngredientsForm register={register} errors={errors} />
            </div>
          </div>
          <div className="mt-4 justify-self-center">
            <Button buttonName="Upload">
              <span>
                <HeroiconsOutlineCloudUpload className="size-4" />
              </span>
              <span className="text-sm">Upload</span>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
