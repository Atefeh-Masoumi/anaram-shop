import React from "react";
import './productheader.css';
import headimage from '../../asset/images/productpagesheadeImage.webp';


const ProductHeader = () => {
    return ( 
        <div>
            <div className="position-relative">
                <div className="position-relative">
                <img src={headimage}  alt="Header-free-shipping" className=" Header-img"/>
                </div>
                <div className="d-flex bg-black position-absolute">
                    <div  className="text-align-center mb-4">
                        <span className="productheader-text ">ارسال رایگان</span>
                    </div>
                    <div className="text-align-center mb-4">
                        <span className="productheader-text2">به سراسر کشور </span>
                    </div>
                    <div  className="text-align-center mb-4">
                        <span className="productheader-text3">  خریدهای بالای 250 هزار تومان </span>
                    </div>

                </div>
            </div>
        </div>
     );
}


export default ProductHeader;