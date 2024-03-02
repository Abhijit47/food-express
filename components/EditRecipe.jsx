import FormInput from "./FormInput";

export default function EditRecipe({ recipe, register, errors }) {
  return (
    <div className="space-y-6 sm:space-y-5">
      <FormInput
        labelFor={"title"}
        labelName={"Title"}
        inputName={"title"}
        inputId={"title"}
        inputType={"text"}
        placeholder={"Enter recipe title"}
        register={register}
        required={"This field is required"}
        errors={errors}
        defaultvalue={recipe?.title}
      />
      <FormInput
        labelFor={"source_url"}
        labelName={"URL Address"}
        inputName={"source_url"}
        inputId={"source_url"}
        inputType={"url"}
        placeholder={"Enter source url"}
        register={register}
        required={"This field is required"}
        errors={errors}
        defaultvalue={recipe?.source_url}
      />
      <FormInput
        labelFor={"image_url"}
        labelName={"Image URL"}
        inputName={"image_url"}
        inputId={"image_url"}
        inputType={"url"}
        placeholder={"Enter image url"}
        register={register}
        required={"This field is required"}
        errors={errors}
        defaultvalue={recipe?.image_url}
      />
      <FormInput
        labelFor={"publisher"}
        labelName={"Publisher"}
        inputName={"publisher"}
        inputId={"publisher"}
        inputType={"text"}
        placeholder={"Enter publisher name"}
        register={register}
        required={"This field is required"}
        errors={errors}
        defaultvalue={recipe?.publisher}
      />
      <FormInput
        labelFor={"cooking_time"}
        labelName={"Prep Time"}
        inputName={"cooking_time"}
        inputId={"cooking_time"}
        inputType={"number"}
        placeholder={"Enter cooking time"}
        register={register}
        required={"This field is required"}
        errors={errors}
        defaultvalue={recipe?.cooking_time}
      />
      <FormInput
        labelFor={"servings"}
        labelName={"Servings"}
        inputName={"servings"}
        inputId={"servings"}
        inputType={"number"}
        placeholder={"Enter serving count"}
        register={register}
        required={"This field is required"}
        errors={errors}
        defaultvalue={recipe?.servings}
      />
    </div>
  );
}
