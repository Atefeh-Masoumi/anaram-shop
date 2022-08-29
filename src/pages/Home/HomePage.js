import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { HiArrowLeft } from "react-icons/hi";
import * as data from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import bateryghlmi from "../../asset/images/battery-ghlami.webp";
import baterynimghlmi from "../../asset/images/battery-nim-ghalami.webp";
import baterysizec from "../../asset/images/batery-size-c.webp";
import baterysized from "../../asset/images/battery-size-d.webp";
import bateryketabi from "../../asset/images/battery-ketabi.webp";
import bateryseke from "../../asset/images/batery-sekei.webp";
import ProductCard from "../../components/ProductCard/ProductCard";

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
    <div className="bg-color">
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
              <h2 className="heading-title text-center">
                انواع باتری برند وارتا آلمان
              </h2>
            </div>
            <div className="d-flex flex-row p-2 ">
              {Battery.map((b) => (
                <div className="m-4 d-flex justify-content-center flex-column text-category">
                  <div className="d-flex bg-white Home-img-heading ">
                    <img src={b.img} alt={b.name} className="img-heading" />
                  </div>

                  <div className="text-heading-container  text-align-center">
                    <h2 className=" mainfont d-flex justify-content-center align-items-center fs-13 text-align-center">
                      {b.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      

      {/* ghalami Category */}
      <div className="d-flex flex-column justify-content-center mt-4">
        <div className="d-flex align-items-center justify-content-center">
          <span className="cardslide-header fs-5">باتری قلمی</span>
          <div className="visitmorebtn">
            <Link to="#" className="d-flex ">
              <span className="">مشاهده همه</span>
              <span className="">
                <HiArrowLeft fontSize={"18px"} />
              </span>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            slidesPerGroup={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper "
          >
            {data.ghalami.map((product) => (
              <div className="col-md-4 col-sm-6" key={product.id}>
                <SwiperSlide>
                  <ProductCard product={product} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>


      {/* Nimghamali category*/}
      <div className="d-flex align-items-center justify-content-center mt-8">
        <div className="d-flex justify-content-between mt-4">
          <div>
            <span className="cardslide-header fs-5">باتری نیم قلمی</span>
          </div>
          <div className="visitmorebtn">
            <Link to="#" className="d-flex ">
              <span className="">مشاهده همه</span>
              <span className="">
                <HiArrowLeft fontSize={"18px"} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-2">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper "
        >
          {data.Nimghalami.map((product) => (
            <div className="col-md-4 col-sm-6" key={product.id}>
              <SwiperSlide>
                <ProductCard product={product} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>

      {/* sekei category */}

      <div className="d-flex align-items-center justify-content-center  mt-8">
        <div className="d-flex justify-content-between mt-4">
          <div>
            <span className="cardslide-header fs-5">باتری سکه ای </span>
          </div>
          <div className="visitmorebtn">
            <Link to="#" className="d-flex ">
              <span className="">مشاهده همه</span>
              <span className="">
                <HiArrowLeft fontSize={"18px"} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-2">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper "
        >
          {data.sekei.map((product) => (
            <div className="col-md-4 col-sm-6" key={product.id}>
              <SwiperSlide>
                <ProductCard product={product} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>

    </div>
    // end of home page
  );
};

export default HomePage;
