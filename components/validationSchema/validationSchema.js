import * as Yup from "yup";
const getCharactersValidationErrors = (str) => {
  return `your password must have at least 1 ${str} characters`;
};

export const registerSchema = Yup.object({
  firstName: Yup.string()
    .required("first name is required")
    .max(15, "first name must 15 characters or less"),
  lastName: Yup.string()
    .required("last name is required")
    .max(15, "last name must 15 characters or less"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  email: Yup.string()
    .email("please enter a valid email")
    .required("email is required"),
  password: Yup.string()
    .min(6, "password should be less than 6 characters")
    .required("password is required")
    .matches(/[0-9]/, getCharactersValidationErrors("digit"))
    .matches(/[a-z]/, getCharactersValidationErrors("lowerCase"))
    .matches(/[A-Z]/, getCharactersValidationErrors("upperCase"))
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      getCharactersValidationErrors("special character")
    ),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("please enter a valid email")
    .required("email is required"),
  password: Yup.string().required("password is required"),
});
