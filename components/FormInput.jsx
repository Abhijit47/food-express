export default function FormInput({
  labelName,
  labelFor,
  inputName,
  inputId,
  inputType,
  placeholder,
  register,
  required,
  errors,
  defaultvalue,
}) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor={labelFor}
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {labelName}
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <input
          id={inputId}
          name={inputName}
          type={inputType}
          autoComplete="off"
          className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
          placeholder={
            labelName.startsWith("Ingredients")
              ? "Format: 'Quantity,Unit,Description'"
              : placeholder
          }
          {...register(`${inputName}`, {
            required: required,
            message: "This field is required",
          })}
          defaultValue={defaultvalue}
        />
        <div>
          {errors[inputName] && (
            <span className="text-sm text-red-500">
              {errors[inputName]?.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
