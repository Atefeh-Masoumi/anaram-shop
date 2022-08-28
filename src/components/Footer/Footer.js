import React from "react";
import "./footer.css";
import { BiCircle } from "react-icons/bi";
import enamad from "../../asset/images/e-namad.webp";
import pasargadbank from "../../asset/images/Pasargad_Electronic_Payment_Services_Company_logo.webp";
import font from "../../asset/images/font-anaram.webp";
import logofav from '../../asset/images/Anaram-fav.webp';
const Footer = () => {
  return (
    <footer>
      <div className="bg-white d-flex justify-content-center align-items-center flex-column">
        <div className="footer-container bg-white d-flex justify-content-center align-items-center">
          <div className=" d-flex justify-content-center  flex-row">
            {/* first column */}
            <div className="col-lg-4 d-flex flex-column">
              <div className="d-flex flex-column">
                <p className="footer-firstcolumn-title">
                  فروشگاه اینترنتی آنارام
                </p>
                <p className="footer-firstcolumn-text">
                  فروشگاه آنارام نماینده فروش محصولات شرکت وارتا (Varta) آلمان
                  (دارای ۱۳۰ سال سابقه در تولید انواع باتری) است که فعالیت خود
                  را در سال 1400 آغاز نمود.
                </p>
                <p className="footer-firstcolumn-text">
                  {" "}
                  آنارام دارای نمایندگی باتری وارتا و دیگر محصولات این شرکت است
                  و در این فروشگاه انواع باتری قلمی و نیم قلمی ، باتری شارژی ،
                  باتری سکه ای ، باتری مخصوص مانند باتری دوربین و تلفن و دیگر
                  محصولات برند وارتا از جمله شارژر باتری و چراغ قوه عرضه می
                  گردد.
                </p>
                <ul className="d-flex">
                  <li className="footer-firstcolumn-li d-flex">
                    <BiCircle className="footer-circleicon" />
                    <span className="footer-li-text">باتری</span>
                  </li>
                  <li className="footer-firstcolumn-li d-flex">
                    <BiCircle className="footer-circleicon" />
                    <span className="footer-li-text">شارژر باتری</span>
                  </li>
                  <li className="footer-firstcolumn-li d-flex">
                    <BiCircle className="footer-circleicon" />
                    <span className="footer-li-text">روشنایی</span>
                  </li>
                  <li className="footer-firstcolumn-li d-flex">
                    <BiCircle className="footer-circleicon" />
                    <span className="footer-li-text">پاوربانک</span>
                  </li>
                  <li className="footer-firstcolumn-li d-flex">
                    <BiCircle className="footer-circleicon" />
                    <span className="footer-li-text">کابل و شارژر</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6  d-flex justify-content-center  align-items-start flex-row">
              {/* second column */}
              <div className="col-lg-2 d-flex flex-column justify-content-center ">
                <div className="footer-columns-title">
                  <span className="footer-title-span footer-divider p-2">
                    اطلاعات تماس
                  </span>
                </div>

                <div className="d-flex flex-column fs-13 mt-4 font-weight-300">
                  <p>
                    <strong className="fs-13 ">تلفن تماس</strong>
                  </p>
                  <p className="font-family-num">
                    <strong>
                      <span>
                        <a href="tel:02187185450">02187185450</a>
                      </span>
                    </strong>
                  </p>
                  <p>
                    <strong>آدرس دفتر</strong>
                  </p>
                  <p>
                    <strong className="font-weight-300 font-family-num">
                      تهران، بالاتر از میدان ولیعصر، کوی دانش کیان، پلاک ۲۳،
                      طبقه ۳
                    </strong>
                  </p>
                </div>
              </div>
              {/* third column */}
              <div className="col-lg-2 d-flex flex-column justify-content-center">
                <div className="footer-columns-title">
                  <span className="footer-title-span footer-divider p-2">
                    {" "}
                    راهنمای خرید
                  </span>
                </div>
                <div className="d-flex justify-content-start  pading-left-none">
                  <ul className="d-flex flex-column fs-13 mt-4 pading-left-none">
                    <li className="p-1">
                      <span className="fs-13 "> نحوه ثبت سفارش</span>
                    </li>
                    <li className="p-1">
                      <span>پیگیری سفارش</span>
                    </li>
                    <li className="p-1">
                      <span>رویه ارسال</span>
                    </li>
                    <li>
                      <span className="p-1">شیوه های پرداخت</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* fourth column */}
              <div className="col-lg-2 d-flex flex-column justify-content-center">
                <div className="footer-columns-title">
                  <span className="footer-title-span footer-divider p-2">
                    {" "}
                    خدمات مشتریان
                  </span>
                </div>
                <div className="d-flex justify-content-start  pading-left-none">
                  <ul className="d-flex flex-column fs-13 mt-4 pading-left-none">
                    <li className="p-1">
                      <span className="fs-13 "> پرسش های متداول</span>
                    </li>
                    <li className="p-1">
                      <span> حریم خصوصی</span>
                    </li>

                    <li>
                      <span className="p-1">محصولات </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* fifth column */}
              <div className="col-lg-2 d-flex flex-column justify-content-center">
                <div className="footer-columns-title">
                  <span className="footer-title-span footer-divider p-2">
                    {" "}
                    آنارام
                  </span>
                </div>
                <div className="d-flex justify-content-start  pading-left-none">
                  <ul className="d-flex flex-column fs-13 mt-4 pading-left-none">
                    <li className="p-1">
                      <span className="fs-13 "> درباره ما</span>
                    </li>
                    <li className="p-1">
                      <span> تماس با ما</span>
                    </li>

                    <li>
                      <span className="p-1">درباره وارتا </span>
                    </li>
                    <li>
                      <span className="p-1">مجله </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* license images */}
        <div className="bg-white d-flex justify-content-start ">
          <div>
            <img src={enamad} alt="enamad" />
          </div>
          <div>
            <img src={pasargadbank} alt="pasargadbank-e pay sign" />
          </div>
          <div className="">
            <img src={font} alt="font iran " />
          </div>
        </div>
      </div>

      <section className=" d-flex justify-content-between align-items-center  height border-top">
        {/* logo */}
        <div className="d-flex justify-content-center align-items-center">
            <img src={logofav} alt="footer-logo" className="footer-logo"/>

        </div>
        {/* txt */}
        <div className="d-flex justify-content-center align-items-center text-align-center">
            <p className="footer-firstcolumn-text">تمام حقوق متعلق به فروشگاه آنارام می باشد.</p>

        </div>
        {/* social icon */}
        <div>

        </div>

      </section>
    </footer>
  );
};
export default Footer;
