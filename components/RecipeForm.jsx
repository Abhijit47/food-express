import FormInput from "./FormInput";

export default function RecipeForm({ register, errors }) {
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
        required={"Ex: Ginger bread"}
        errors={errors}
        // defaultvalue={"recipe 1"}
      />

      <FormInput
        labelFor={"source_url"}
        labelName={"URL Address"}
        inputName={"source_url"}
        inputId={"source_url"}
        inputType={"url"}
        placeholder={"Enter source url"}
        register={register}
        required={"Ex: https://www.example.com"}
        errors={errors}
        // defaultvalue={
        //   "https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/"
        // }
      />

      <FormInput
        labelFor={"image_url"}
        labelName={"Image URL"}
        inputName={"image_url"}
        inputId={"image_url"}
        inputType={"url"}
        placeholder={"Enter image url"}
        register={register}
        required={"Ex: https://www.example.com"}
        errors={errors}
        // defaultvalue={
        //   "https://www.allrecipes.com/thmb/2ZOl-_08_4_0205-500x500.jpg"
        // }
      />

      <FormInput
        labelFor={"publisher"}
        labelName={"Publisher"}
        inputName={"publisher"}
        inputId={"publisher"}
        inputType={"text"}
        placeholder={"Enter publisher name"}
        register={register}
        required={"Ex: Allrecipes"}
        errors={errors}
        // defaultvalue={"Allrecipes"}
      />

      <FormInput
        labelFor={"cooking_time"}
        labelName={"Prep Time"}
        inputName={"cooking_time"}
        inputId={"cooking_time"}
        inputType={"number"}
        placeholder={"Enter cooking time"}
        register={register}
        required={"Ex: 75"}
        errors={errors}
        // defaultvalue={75}
      />

      <FormInput
        labelFor={"servings"}
        labelName={"Servings"}
        inputName={"servings"}
        inputId={"servings"}
        inputType={"number"}
        placeholder={"Enter serving count"}
        register={register}
        required={"Ex: 4"}
        errors={errors}
        // defaultvalue={6}
      />
    </div>
  );
}
