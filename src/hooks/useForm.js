import { useState } from "react";

// hook generico de formulario, uso no login e no form de momentos
function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // tira o erro do campo quando a pessoa volta a digitar
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(onSubmit) {
    return (event) => {
      event.preventDefault();

      const newErrors = validate ? validate(values) : {};
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        onSubmit(values);
      }
    };
  }

  function reset() {
    setValues(initialValues);
    setErrors({});
  }

  return { values, errors, handleChange, handleSubmit, reset };
}

export default useForm;
