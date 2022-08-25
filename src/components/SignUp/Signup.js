import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../Services/SignUpService";
import { useState, useEffect } from "react";
import { useAuthAction, useAuth } from "../../Providers/AuthProviders";
import { useQuery } from "./../../hooks/useQuery";
import React from "react";
// inital values for the form
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordconfirm: "",
};
// Yup schema for form validation
const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام ضروری است")
    .min(3, "اسم باید طولانی تر باشد"),
  email: Yup.string()
    .email("فرمت ایمیل درست نیست")
    .required("ادرس ایمیل ضروری است"),
  phoneNumber: Yup.string()
    .required("شماره تماس ضروری است")
    .matches(/^[0-9]{11}$/, "شماره تماس نامعتبراست")
    .nullable(),
  password: Yup.string()
    .required("رمز عبور ضروری است")
    .matches( 8,
      "Password must contain at least 8 characters,number and special character"
    ),
  passwordconfirm: Yup.string()
    .required("رمز عبور را دوباره وارد نمایید")
    .oneOf([Yup.ref("password"), null], "رمز عبور باید یکی باشد"),
});

const SignupForm = () => {
  // useAuthActions to dispatch actions and useAuth to get the auth state
  const setAuth = useAuthAction();
  const history = useNavigate();
  // useQuery hook to get the query params and redirect
  const query = useQuery();
  const redirect = query.get("redirect") || "/";

  // error state
  const [error, setError] = useState(null);
  const userData = useAuth();

  // useEffect to check if the user is already logged in
  useEffect(() => {
    if (userData) history(redirect);
  }, [redirect, userData, history]);

  // submit handler
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await signupUser(userData);
      setAuth(data);
      localStorage.setItem("auth token", JSON.stringify(data));
      console.log(data);
      setError(null);
      history(redirect);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };

  // useFormik hook
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="formContainer">
      <form
        onSubmit={formik.handleSubmit}
        className="borderanimation m-5 p-5 rounded h-100"
      >
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" type="email" />

        <Input formik={formik} name="phoneNumber" label="Number" type="tel" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
          autocomplete="on"
        />
        <Input
          formik={formik}
          name="passwordconfirm"
          label="Password Confirm"
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className=" border-0 outline-none rounded borderbtn-animation ms-4 text-align-center"
        >
          
            <span>
              <span>
                <span>signup</span>
              </span>
            </span>
          </button>
        
        {error && <p className="error"> {error}</p>}

        <Link to={`/login?redirect=${redirect}`}>
        <button className="border-0 outline-none rounded borderbtn-animation ms-4">
          <span>
            <span>
              <span>login</span>
            </span>
          </span>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
