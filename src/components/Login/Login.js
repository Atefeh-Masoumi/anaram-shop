import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser } from "../../Services/LoginService";
import { useAuthAction, useAuth } from "../../Providers/AuthProviders";
import { useQuery } from "./../../hooks/useQuery";
import { toast } from "react-toastify";
import React from "react";
// inital values for the form
const initialValues = {
  email: "",
  password: "",
};

// Yup schema for form validation
const validationSchema = Yup.object({
  email: Yup.string()
    .email("فرمت ایمیل اشتباه است ")
    .required("لطفا ایمیل رو وارد نمایید"),
  password: Yup.string().required("لطفا رمز عبور را وارد نمایید"),
});

const Login = () => {
  // error state
  const [err, setError] = useState(null);
  const history = useNavigate();
  const query = useQuery();
  const redirect = query.get("redirect") || "/profile";

  // useAuthActions to dispatch actions
  const setAuth = useAuthAction();
  const userData = useAuth();

  useEffect(() => {
    if (userData) history(redirect);
  }, [redirect, userData, history]);

  // submit handler
  const onSubmit = async (values) => {
    try {
      localStorage.setItem("auth token", JSON.stringify(values));
      console.log(values);
      // if you want to use API uncomment line blew
      //const {data} = await loginUser(values)
      setAuth(values);
      setError(null);
      history("/");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
      toast.error(error.response.data.message);
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
    <div className="formContainer mb-8">
      <form onSubmit={formik.handleSubmit} className=" m-5 p-5 rounded h-100">
        <Input formik={formik} name="email" label="ایمیل" type="email" />
        <Input
          formik={formik}
          name="password"
          label="رمز عبور"
          type="password"
          autocomplete="on"
        />

        <button
          type="submit"
          disabled={!formik.isValid}
          className="border-0 outline-none rounded  borderbtn-animation"
        >
          <span>
            <span>
              <span>ورود </span>
            </span>
          </span>
        </button>

        {err && <p style={{ color: "red", marginTop: "20px" }}> {err}</p>}

        <Link to={`/signup`}>
          <button className="border-0 outline-none rounded borderbtn-animation me-4">
          <span>
            <span>
              <span>عضویت</span>
            </span>
          </span>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
