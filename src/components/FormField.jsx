// label + campo + erro. o "as" deixa usar input, textarea ou select
function FormField({ label, id, error, as = "input", children, ...props }) {
  const Field = as; // tem que ser maiusculo pro jsx entender
  const borderColor = error ? "border-red-400" : "border-white/20";

  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-bold">
        {label}
      </label>

      <Field
        id={id}
        name={id}
        className={`w-full rounded-lg border ${borderColor} bg-[#070A12] p-3 outline-none focus:border-[#168BFF]`}
        {...props}
      >
        {children}
      </Field>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}

export default FormField;
