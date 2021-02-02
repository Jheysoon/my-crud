import { Formik, Form } from "formik";

import CustomInput from "./CustomInput";

const FormComponent = ({ addRecord }) => {
  const validation = (values) => {
    let errors = {};

    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values, action) => {
        addRecord(values);

        setTimeout(() => {
          action.resetForm();
        }, 100);
      }}
      validate={validation}
    >
      {() => (
        <Form>
          <label>Username</label>
          <CustomInput name="username" />

          <label>Password</label>
          <CustomInput name="password" />

          <button type="submit">Add to List</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
