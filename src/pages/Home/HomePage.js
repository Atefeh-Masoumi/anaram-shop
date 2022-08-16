import React from "react";
import { Link } from "react-router-dom";
import'./Homepage.css';
const HomePage = () => {
    return ( 
    <>
    <div className="header-container">
        <div className="header-wrapper">
            <div className="header-image-container">
                <div className="header-img"></div>
                {/* text inside the image */}
                <div className="header-textinImage d-flex align-items-center justify-content-center">
                    <div className="header-text">
                        <div className="top-text-container">
                            <h1 className="top-text">فروشگاه آنارام </h1>
                        </div>
                        <div className="middle-text">ارائه محصولات برند وارتاآلمان</div>
                        <Link to="#" className="shop-btn">خرید آنلاین باتری</Link>
                    </div>
                </div>

            </div>

        </div>
    </div>
    </>
     );
}
 
export default HomePage;