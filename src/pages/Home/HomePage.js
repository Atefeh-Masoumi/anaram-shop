import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import bateryghlmi from "../../asset/images/battery-ghlami.webp";
import baterynimghlmi from "../../asset/images/battery-nim-ghalami.webp";
import baterysizec from "../../asset/images/batery-size-c.webp";
import baterysized from "../../asset/images/battery-size-d.webp";
import bateryketabi from "../../asset/images/battery-ketabi.webp";
import bateryseke from "../../asset/images/batery-sekei.webp";
const Battery = [
  {
    img: bateryghlmi,
    name: "باتری قلمی",
  },
  {
    img: baterynimghlmi,
    name: "باتری نیم قلمی",
  },
  {
    img: baterysizec,
    name: "باتری متوسط",
  },
  {
    img: baterysized,
    name: "باتری بزرگ",
  },

  {
    img: bateryketabi,
    name: "باتری کتابی",
  },
  {
    img: bateryseke,
    name: "باتری سکه ای",
  },
];

const HomePage = () => {
  return (
    <>
      {/* image header */}
      <div className="header-container bg-color">
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
                <Link to="#" className="shop-btn">
                  خرید آنلاین باتری
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* heading text category */}
      <div className="d-flex justify-content-center align-items-center mt-4 bg-color">
        <div>
          <div>
            <div className="">
              <h2 className="heading-title text-center">انواع باتری برند وارتا آلمان</h2>
            </div>
            <div className="d-flex flex-row p-2 ">
              {Battery.map(b=><div className="m-4 d-flex justify-content-center flex-column text-category">
                <div className="d-flex bg-white Home-img-heading ">
                  <img src={b.img} alt={b.name} className="img-heading"/>
                </div>
                
                  <div className="text-heading-container  text-align-center">
                    <h2 className=" mainfont d-flex justify-content-center align-items-center fs-13 text-align-center">
                      {b.name}
                    </h2>
                  </div>

                
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
