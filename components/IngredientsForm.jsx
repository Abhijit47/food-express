import FormInput from "./FormInput";

export default function IngredientsForm({ register, errors }) {
  return (
    <div className="space-y-6 sm:space-y-5">
      <FormInput
        labelName={"Ingredients 1"}
        labelFor={"ingredients1"}
        inputName={"ingredients1"}
        inputId={"ingredients1"}
        inputType={"text"}
        register={register}
        required={"Ex. 0.5,cup,rice"}
        errors={errors}
        // defaultvalue={"0.5, cup, rice"}
      />
      <FormInput
        labelName={"Ingredients 2"}
        labelFor={"ingredients2"}
        inputName={"ingredients2"}
        inputId={"ingredients2"}
        inputType={"text"}
        register={register}
        required={"Ex. 0.5,cup,rice"}
        errors={errors}
        // defaultvalue={"0.5, tbsn, salt"}
      />
      <FormInput
        labelName={"Ingredients 3"}
        labelFor={"ingredients3"}
        inputName={"ingredients3"}
        inputId={"ingredients3"}
        inputType={"text"}
        register={register}
        required={"Ex. 0.5,cup,rice"}
        errors={errors}
        // defaultvalue={"1.2, ltr, water"}
      />
      <FormInput
        labelName={"Ingredients 4"}
        labelFor={"ingredients4"}
        inputName={"ingredients4"}
        inputId={"ingredients4"}
        inputType={"text"}
        register={register}
        required={"Ex. 0.5,cup,rice"}
        errors={errors}
        // defaultvalue={"1, pcs, lemon"}
      />
      <FormInput
        labelName={"Ingredients 5"}
        labelFor={"ingredients5"}
        inputName={"ingredients5"}
        inputId={"ingredients5"}
        inputType={"text"}
        register={register}
        required={false}
        errors={errors}
        // defaultvalue={""}
      />
      <FormInput
        labelName={"Ingredients 6"}
        labelFor={"ingredients6"}
        inputName={"ingredients6"}
        inputId={"ingredients6"}
        inputType={"text"}
        register={register}
        required={false}
        errors={errors}
        // defaultvalue={""}
      />
    </div>
  );
}
