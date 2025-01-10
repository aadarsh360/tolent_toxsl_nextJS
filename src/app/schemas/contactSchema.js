import * as Yup from "yup";

export const contactSchema = Yup.object({

    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    mobile: Yup.string().min(10).required("Please enter your mobile number"),
    description: Yup.string().min(10).max(100).required("Please enter some description")
})