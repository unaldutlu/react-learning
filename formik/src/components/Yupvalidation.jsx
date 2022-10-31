import React from "react";
import { useFormik } from "formik";
import Validation from "./Validation";

function Formikuse() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          placeholder='jane@acme.com'
          type='email'
          onChange={handleChange}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          placeholder='jane@acme.com'
          type='password'
          onChange={handleChange}
        />
        <br />
        <label htmlFor='passwordConfirm'>Passwordconfirm</label>
        <input
          id='passwordConfirm'
          name='passwordConfirm'
          placeholder='jane@acme.com'
          type='password'
          onChange={handleChange}
        />
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

export default Formikuse;
