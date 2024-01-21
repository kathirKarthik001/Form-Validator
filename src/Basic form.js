import React from 'react'
import { useFormik  } from 'formik'
import { basicSchema } from './Validation/Basic';

export default function Basic() {

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },

        validationSchema:basicSchema,

        onSubmit: values => {
          console.log(JSON.stringify(values, null, 2));
          formik.resetForm();
          },
    })



  return (
    <div>
        <form  onSubmit={formik.handleSubmit}>
            <input 
            required
            type="email" 
            name="email" 
            id=""
            placeholder='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email
                ? 'input-error'
                : ''
            }
            />
           {(formik.submitCount > 0 || formik.touched.email) &&
          formik.errors?.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
            <br />
            <input
            required
            type="password"
            name='password'
            placeholder='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.password && formik.errors.password ? 'input-error' :''}
            />
            {formik.touched.password && formik.errors?.password }
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}
