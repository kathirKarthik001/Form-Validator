import React from 'react';
import { useFormik } from 'formik';
import { advancedSchema } from './Validation/Advanced';

export default function Advanced() {
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      age: 0,
      email: '',
      password: '',
      cpassword: '',
      agreeTerms: false,
    },
    validationSchema:advancedSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="first name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fname}
          className={
            formik.touched.fname && formik.errors.fname ? 'input-error' : ''
          }
        />
        {formik.touched.fname && formik.errors?.fname && (
          <span>{formik.errors.fname}</span>
        )}
        <br />
        <input
          type="text"
          name="lname"
          placeholder="last name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lname}
          className={
            formik.touched.lname && formik.errors.lname ? 'input-error' : ''
          }
        />
        {formik.touched.lname && formik.errors?.lname && (
          <div className="error-message">{formik.errors.lname}</div>
        )}
        <br />
        <input
          type="number"
          name="age"
          placeholder="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          className={
            formik.touched.age && formik.errors.age ? 'input-error' : ''
          }
        />
        {formik.touched.age && formik.errors?.age && (
          <div className="error-message">{formik.errors.age}</div>
        )}
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={
            formik.touched.email && formik.errors.email ? 'input-error' : ''
          }
        />
        {formik.touched.email && formik.errors?.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={
            formik.touched.password && formik.errors.password
              ? 'input-error'
              : ''
          }
        />
        {formik.touched.password && formik.errors?.password && (
          <div className="error-message">{formik.errors.password}</div>
        )}
        <br />
        <input
          type="password"
          name="cpassword"
          placeholder="confirm password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cpassword}
          className={
            formik.touched.cpassword && formik.errors.cpassword
              ? 'input-error'
              : ''
          }
        />
        {formik.touched.cpassword && formik.errors?.cpassword && (
          <span>{formik.errors.cpassword}</span>
        )}
        <br />
        <label htmlFor="agreeTerms">
          <input
            type="checkbox"
            name="agreeTerms"
            id="agreeTerms"
            checked={formik.values.agreeTerms}
            onChange={formik.handleChange}
            className={
              formik.touched.agreeTerms && formik.errors.agreeTerms
                ? 'input-error'
                : ''
            }
          />
          Agree to terms and conditions
        </label>
        {formik.touched.agreeTerms && formik.errors?.agreeTerms && (
            <div className="error-message">{formik.errors.agreeTerms}</div>
          )}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
