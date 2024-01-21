import * as yup from 'yup'

const passwordRules = {
    lowercase: /^(?=.*[a-z])/,
    uppercase: /^(?=.*[A-Z])/,
    digit: /^(?=.*\d)/,
    specialCharacter: /^(?=.*[!@#$%^&*()_+])/,
  };


export const advancedSchema = yup.object().shape({
    fname:yup.string().required('required'),
    lname:yup.string().required('required'),
    age:yup.number().positive().integer().required('required'),
    email:yup.string().email('invalid email').required('required'),
    password:yup
    .string()
    .min(5).max(10)
    .matches(passwordRules.digit ,{message:"atleast one  digit  neeeded"})
    .matches(passwordRules.lowercase ,{message:"atleast one  lowercase  neeeded"})
    .matches(passwordRules.uppercase ,{message:"atleast one  uppercase  neeeded"})
    .matches(passwordRules.specialCharacter ,{message:"atleast one  specialCharacter  neeeded"})
    .required('required'),
    cpassword:yup.string().oneOf([yup.ref('password'),null],"passwords must match").required('required'),
    agreeTerms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required('required'),
})