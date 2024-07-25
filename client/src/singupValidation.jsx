import * as Yup from "yup";

export const signupValidtion = Yup.object({
  name: Yup.string().min(3).required("Please enter a name"),
  email: Yup.string().email("Please enter valid email").required("Please enter a valid email"),
  password: Yup.string().min(8).required("Please enter a password"),
})
