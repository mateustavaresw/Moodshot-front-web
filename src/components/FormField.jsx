// label + campo + erro. o "as" deixa usar input, textarea ou select
function FormField({ label, id, error, as = "input", children, ...props }) {
  const Field = as; // tem que ser maiusculo pro jsx entender
  const borderColor = error ? "border-red-400" : "border-white/20";

  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-400">
        {label}
      </label>

      <Field
        id={id}
        name={id}
        className={`w-full border ${borderColor} bg-ink p-3 outline-none transition placeholder:text-slate-600 focus:border-azul`}
        {...props}
      >
        {children}
      </Field>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}

export default FormField;
