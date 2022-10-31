import React from "react";
import { useFormik } from "formik";

function Formikuse() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      country: "",
      hobbies: [],
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First Name</label>
      <input
        id='firstName'
        name='firstName'
        placeholder='Jane'
        onChange={handleChange}
      />
      <br />
      <label htmlFor='lastName'>Last Name</label>
      <input
        id='lastName'
        name='lastName'
        placeholder='Doe'
        onChange={handleChange}
      />
      <br />
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        name='email'
        placeholder='jane@acme.com'
        type='email'
        onChange={handleChange}
      />
      <br />
      <input
        type='radio'
        name='gender'
        onChange={handleChange}
        value='male'
        checked={values.gender === "male"}
      />
      <span>Male</span>
      <br />
      <input
        type='radio'
        name='gender'
        onChange={handleChange}
        value='female'
        checked={values.gender === "female"}
      />
      <span>Female</span>
      <br />
      <br />
      <div>
        <input
          type='checkbox'
          name='hobbies'
          onChange={handleChange}
          value='football'
        />
        Football
      </div>
      <div>
        <input
          type='checkbox'
          name='hobbies'
          onChange={handleChange}
          value='volleyball'
        />
        Volleyball
      </div>
      <div>
        <input
          type='checkbox'
          name='hobbies'
          onChange={handleChange}
          value='hentball'
        />
        Hentball
      </div>
      <br />
      <br />
      <select name='country' value={values.country} onChange={handleChange}>
        <option value='Turkey'>Turkey</option>
        <option value='England'>England</option>
        <option value='usa'>USA</option>
      </select>
      <br />
      <br />
      <br />
      <br />
      <button style={{ "text-align": "center" }} type='submit'>
        Submit
      </button>
      <br />
      <code>{JSON.stringify(values)}</code>
      <br /><br /><br />
    </form>
  );
}

export default Formikuse;
