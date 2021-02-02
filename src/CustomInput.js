import { useField } from "formik";

const CustomInput = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input value={field.value} name={field.name} onChange={field.onChange} />

      {meta.touched && meta.error && (
        <span style={{ color: "red" }}>* {meta.error}</span>
      )}
    </>
  );
};

export default CustomInput;
