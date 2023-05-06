import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const FormSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Please enter your name"),
    email :Yup.string().email().required("Please enter your email"),
    password : Yup.string().password().required("Please enter password"),
    confirm_password:Yup.string().oneOf([Yup.ref('password')],"Password is not matching").required("Password must match"),
});