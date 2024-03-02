"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import EditRecipe from "./EditRecipe";
import EditIngredient from "./EditIngredient";
import { useUpdateRecipeMutation } from "@/lib/services/myRecipeService";
import { createIngredients } from "@/lib/helpers";
import { FluentPatch24Regular } from "@/assets/icons";
import Button from "./Button";

export default function EditForm({ recipe, onToggle }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [updateRecipe, { isLoading, isError, error }] =
    useUpdateRecipeMutation();

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

    const patchedRecipe = {
      id: recipe?._id,
      title: newRecipe.title,
      source_url: newRecipe.source_url,
      image_url: newRecipe.image_url,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cooking_time,
      servings: +newRecipe.servings,
      ingredients,
    };

    const { data } = await updateRecipe(patchedRecipe);

    if (data.status === "success") {
      toast.success("Recipe updated successfully");
      reset();
      onToggle();
    } else {
      toast.error("Something went wrong‼️");
      reset();
      onToggle();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4 grid gap-y-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-2 sm:space-y-5">
            <h3 className="text-lg font-semibold uppercase leading-6 text-gray-900">
              Recipe Data
            </h3>
            <EditRecipe recipe={recipe} register={register} errors={errors} />
          </div>

          <div className="space-y-2 sm:space-y-5">
            <h3 className="text-lg font-semibold uppercase leading-6 text-gray-900">
              Ingredients Data
            </h3>

            <EditIngredient
              recipe={recipe}
              register={register}
              errors={errors}
            />
          </div>
        </div>

        <div className="mt-4 justify-self-center">
          <Button buttonName="Update">
            <span>
              <FluentPatch24Regular className="size-4" />
            </span>
            <span>Update</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
