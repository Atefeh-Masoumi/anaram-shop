import React from "react";
import "./input.css";
import "./borderanimation.scss"
const Input = ({ formik, name, label, type = "text" }) => {
  return (
    <div className="formControl">
      <div className="inputcontainer">
        
        <label htmlFor={name} className="">
          {label} :{" "}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          className="inputstyle "
          {...formik.getFieldProps(name)}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
