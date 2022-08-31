import React from "react";
import "./productheader.css";
import headimage from "../../asset/images/productpagesheadeImage.webp";

const ProductHeader = () => {
  return (
    <div>
      <img
        src={headimage}
        alt="freeshiping"
        className="Header-img "
        loading="lazy"
      />

      <div className=" d-flex flex-column  ">
        <span className="productheader-text text-align-center mb-4 position-absolute  text-transform ">
          ارسال رایگان
        </span>
        <span className="productheader-text2 text-align-center position-absolute  text-transform2 mb-4 mainfont">
          به سراسر کشور{" "}
        </span>
        <span className="productheader-text3  text-align-center position-absolute mb-4 text-transform3 font-family-num">
          {" "}
          خریدهای بالای 250 هزار تومان{" "}
        </span>
      </div>
    </div>
  );
};

export default ProductHeader;
