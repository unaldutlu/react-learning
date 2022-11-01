import React from "react";
import { useFormik } from "formik";
import Validation from "./Validation";

function Yupvalidation() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },

      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
      validationSchema: Validation,
    });

  return (
    <div>
      <form onSubmit={handleSubmit} className='labels'>
        <label>Email</label>
        <input
          name='email'
          placeholder='jane@acme.com'
          type='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className='error'>{errors.email}</div>
        )}
        <br />
        <label>Password</label>
        <input
          name='password'
          placeholder='12345'
          type='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className='error'>{errors.password}</div>
        )}
        <br />
        <label>Password Confirm</label>
        <input
          name='passwordConfirm'
          placeholder='12345'
          type='password'
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className='error'>{errors.passwordConfirm}</div>
        )}
        <br />
        <br />
        <button type='submit'>Submit</button>
        <br />
        <code>{JSON.stringify(values)}</code>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}

export default Yupvalidation;
