import * as yup from "yup";
// const passwordRules = /^(?=.*\d) (?=.*[a-z]) (?=.*[A-Z]).{5,}$/;
// min 5 Characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
const contactSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  phone: yup.number("phone must be a number"),
  message: yup.string(),
});
export default contactSchema;
