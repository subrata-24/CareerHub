import * as Yup from "yup";

export const ValidateUsers = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Firstname must contain at least two character")
    .required("Firstname is required"),

  lastname: Yup.string(),

  email: Yup.string()
    .email("Invalid email formate")
    .required("Email is required"),

  education: Yup.string(),

  skills: Yup.string(),

  experience: Yup.string(),

  role: Yup.string().required("Role is required"),
});
