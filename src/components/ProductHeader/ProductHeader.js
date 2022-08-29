import React from "react";
import './productheader.css';
import headimage from '../../asset/images/productpagesheadeImage.webp';


const ProductHeader = () => {
    return ( 
        <div>
            <div className="position-relative">
                <img src={headimage}  alt="Header-free-shipping" className="position-relative Header-img"/>
                <div>
                    <div>
                        <span className="productheader-text bg-color position-absolute">ارسال رایگان</span>
                    </div>

                </div>
            </div>
        </div>
     );
}


export default ProductHeader;