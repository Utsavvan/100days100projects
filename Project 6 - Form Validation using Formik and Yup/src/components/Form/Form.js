import { Formik, useFormik, FastField } from "formik";

import { FormSchema } from "./FormSchema";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  //   const { values, errors, handleChange, handleBlur, handleSubmit ,touched} = useFormik({
  //     initialValues,
  //     validationSchema: FormSchema,
  //     onSubmit: (values) => {
  //       console.log("🚀 ~ file: Form.js:17 ~ Form ~ values:", values);
  //     },
  //   });
    // console.log("🚀 ~ file: Form.js:20 ~ Form ~ errors:", values)

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={(values) => {
            console.log("🚀 ~ file: Form.js:17 ~ Form ~ values:", values);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
          }) => (
            <form action="" onSubmit={handleSubmit}>
              <br />
              <label htmlFor="name">Name</label>
              <FastField
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
              />
              {touched.name && errors.name ? <p>{errors.name}</p> : null}
              <br />
              <label htmlFor="email">Email</label>
              <FastField
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
              />
              {touched.email && errors.email ? <p>{errors.email}</p> : null}
              <br />
              <label htmlFor="password">Password</label>
              <FastField
                type="text"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
              />
              {touched.password && errors.password ? (
                <p>{errors.password}</p>
              ) : null}
              <br />
              <label htmlFor="confirm_password">Confirm password</label>
              <FastField
                type="text"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="confirm_password"
              />
              {touched.confirm_password && errors.confirm_password ? (
                <p>{errors.confirm_password}</p>
              ) : null}
              <br />
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Form;
