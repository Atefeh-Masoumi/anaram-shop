import React from "react";
import './productheader.css';
import headimage from "../../asset/images/productpagesheadeImage.webp"


const ProductHeader = () => {
    return ( 
        <div>
            <img  src={headimage} alt="freeshiping" className="Header-img " loading="lazy"/>
                           
            <div  className=" d-flex flex-column  ">
            <span className="productheader-text text-align-center mb-4 position-absolute  text-transform ">ارسال رایگان</span>
            <span className="productheader-text2 text-align-center mb-4  ">به سراسر کشور </span>
            <span className="productheader-text3  text-align-center mb-4">  خریدهای بالای 250 هزار تومان </span>
            </div>
            <div className=" ">
                
            </div>
            <div  className=" ">
                
            </div>

           
        </div>
     );
}


export default ProductHeader;