import * as yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(yup) 

let loginSchema = yup.object({
    email : yup.string().email('Invalid email address').required("Email cannot be empty ").trim(),
    password :yup.string().password().required()
})


let signupSchema = yup.object({
    userName : yup.string().required().trim(),
    email : yup.string().email('Invalid email address').required("Email cannot be empty ").trim(),
    password :yup.string().password().required()
})


export { loginSchema  , signupSchema};