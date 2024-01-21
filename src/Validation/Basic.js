import * as yup from 'yup'

const passwordRules = {
    lowercase: /^(?=.*[a-z])/,
    uppercase: /^(?=.*[A-Z])/,
    digit: /^(?=.*\d)/,
    specialCharacter: /^(?=.*[!@#$%^&*()_+])/,
  };


export const basicSchema = yup.object().shape({
    email:yup.string().email('invalid email'),
    password:yup
    .string()
    .min(5).max(10)
    .matches(passwordRules.digit ,{message:"atleast one  digit  neeeded"})
    .matches(passwordRules.lowercase ,{message:"atleast one  lowercase  neeeded"})
    .matches(passwordRules.uppercase ,{message:"atleast one  uppercase  neeeded"})
    .matches(passwordRules.specialCharacter ,{message:"atleast one  specialCharacter  neeeded"})

})