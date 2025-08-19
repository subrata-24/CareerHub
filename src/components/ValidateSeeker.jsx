import * as Yup from "yup";

export const ValidateSeeker = Yup.object().shape({
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

  password: Yup.string()
    .min(8, "Password must contain at least 8 character")
    .matches(/[A-Z]/, "Password must contain at least one letter")
    .matches(/[a-z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*()_+{}|'";:<>/?]/,
      "Password must contain at least one letter"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});
