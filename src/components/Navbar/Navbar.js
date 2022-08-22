import "./navbar.css";
import logo from "../../asset/images/Anaram-logo-main.png";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import bateryghlmi from "../../asset/images/battery-ghlami.webp";
import baterynimghlmi from "../../asset/images/battery-nim-ghalami.webp";
import baterysizec from "../../asset/images/batery-size-c.webp";
import baterysized from "../../asset/images/battery-size-d.webp";
import bateryketabi from "../../asset/images/battery-ketabi.webp";
import bateryseke from "../../asset/images/batery-sekei.webp";
import Techsubmenu1 from "../../asset/images/submenu-charger-battery.webp";
import Techsubmenu2 from "../../asset/images/submenu-alkaline.webp";
import Techsubmenu3 from "../../asset/images/submenu-metal-hybrid.webp";
import Techsubmenu4 from "../../asset/images/submenu-zink-carbon.webp";
import Techsubmenu5 from "../../asset/images/submenu-battery on air.webp";
import Techsubmenu6 from "../../asset/images/submenu-lithium-battery.webp";
import usagesubmenu1 from '../../asset/images/camera.png';
import usagesubmenu2 from '../../asset/images/hearing-aid.png';
import usagesubmenu3 from '../../asset/images/blood-pressure.png';
import usagesubmenu4 from '../../asset/images/clock.png';
import usagesubmenu5 from '../../asset/images/torch.png';
import usagesubmenu6 from '../../asset/images/phone.png';

const SubmenuBaseonTech = [
  { img: Techsubmenu1, name: "باتری شارژی" },
  { img: Techsubmenu2, name: "باتری آلکالاین" },
  { img: Techsubmenu3, name: "باتری نیکل متال هیدرید" },
  { img: Techsubmenu4, name: "باتری زینک کربن" },
  { img: Techsubmenu5, name: "باتری روی و هوا" },
  { img: Techsubmenu6, name: "باتری لیتیومی" },
];
const SubmenuBaseonUsage =[
{img:usagesubmenu1, name:"باتری دوربین"},
{img:usagesubmenu2, name:"سمعک"},
{img:usagesubmenu3, name:"لوازم پزشکی"},
{img:usagesubmenu4, name:"ساعت"},
{img:usagesubmenu5, name:"چراغ قوه"},
{img:usagesubmenu6, name:"تلفن"}
]
const NavbarComponent = () => {
  return (
    <>
      <div className="nav-container">
        <section className="top-nav">
          <div className="nav-top-container">
            {/* logo */}
            <div className="logo-container">
              <Link to={"/"}>
              <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>
            {/* searchbar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="جستجوی محصولات..."
                className=" navbar-search-input"
              />
            </div>
            {/* cart and login section*/}
            <div className="d-flex ">
              <div className="login-container shopcart-container mx-2">
                <a
                  href="https://www.instagram.com/anaram.shop/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="navabr-login-btn d-flex"
                >
                  <AiOutlineInstagram
                    fontSize={"18px"}
                    className="pl-2  "
                    color="#fff"
                  />
                </a>
              </div>
              {/* login */}
              <div className="login-container shopcart-container">
                <Link to={"/login"} className="navabr-login-btn d-flex">
                  <FaRegUser
                    fontSize={"18px"}
                    className="pl-2  "
                    color="#fff"
                  />
                </Link>
              </div>
              {/* Cart */}
              <div className="shopcart-container me-2">
                <span className="shop-num">0</span>
                <BiShoppingBag fontSize={"1.5rem"} className="shopicon" />
              </div>
            </div>
          </div>
        </section>
        {/* navbar-product-main menu */}
        <section className="nav-bottom">
          <div className="nav-menu">
            <div className="d-flex align-items-center align-content-center justify-content-center menu-container">
              <div className="main-menu">
                <div className="d-flex justify-content-center align-items-center main-menu-wrapper">
                  <div className="main-menu-content">
                    <ul className="d-flex">
                      <li>
                        <Link to="#" className="main-menu-link ">
                          <span className="menu-item-text has-submenu">
                            باتری بر اساس سایز
                          </span>
                        </Link>
                        {/* sub menu */}
                        <ul className="sub-menu bg-white">
                          <li className="w-full">
                            <Link to="#" className="">
                              <img src={baterynimghlmi} alt="باتری نیم قلمی" />
                              <div className="d-flex justify-content-center align-items-center bg-white">
                                <p className="fs-6"> باتری نیم قلمی</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={bateryghlmi} alt="باتری  قلمی" />
                              <div className="d-flex justify-content-center align-items-center bg-white">
                                <p className="fs-6"> باتری قلمی</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={baterysizec} alt="باتری سایز c" />
                              <div className="d-flex justify-content-center align-items-center bg-white">
                                <p className="fs-6"> باتری سایز c</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={baterysized} alt="باتری سایز d" />
                              <div className="d-flex justify-content-center align-items-center bg-white">
                                <p className="fs-6"> باتری سایز d</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={bateryketabi} alt="باتری کتابی" />
                              <div className="d-flex justify-content-center align-items-center bg-white">
                                <p className="fs-6"> باتری کتابی </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={bateryseke} alt="باتری سکه ای " />
                              <div className="d-flex justify-content-center align-items-center bg-white">
                                <p className="fs-6"> باتری سکه ای </p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text has-submenu">
                            باتری براساس کاربرد{" "}
                          </span>
                        </Link>
                        {/* submenu base on Usage */}
                        <ul className="sub-menu bg-white ">
                          {SubmenuBaseonUsage.map((item) => (
                            <li className="d-felx justify-content-center align-item-center ">
                              <Link to="#" className="">
                                <img
                                  src={item.img}
                                  alt="باتری"
                                  className=""
                                />
                                <div className="d-flex justify-content-center align-items-center bg-white">
                                  <p className="fs-7"> {item.name}</p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text has-submenu">
                            باتری براساس تکنولوژی{" "}
                          </span>
                        </Link>
                        {/* submenu base on Tech */}
                        <ul className="sub-menu bg-white ">
                          {SubmenuBaseonTech.map((item) => (
                            <li className="d-felx justify-content-center align-item-center ">
                              <Link to="#" className="">
                                <img
                                  src={item.img}
                                  alt="باتری  "
                                  className=""
                                />
                                <div className="d-flex justify-content-center align-items-center bg-white">
                                  <p className="fs-7"> {item.name}</p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text">شارژر باتری</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text has-submenu">
                            چراغ روشنایی
                          </span>
                        </Link>
                        <ul className="sub-menu flex-column bg-white">
                          <li className="">
                            <Link to="#" className="">
                              <div className="d-flex justify-content-center align-items-center bg-white">
                                <p className="fs-7 text-secondary">
                                  {" "}
                                  چراغ خواب کودک
                                </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <div className="d-flex justify-content-center align-items-center bg-white">
                                <p className="fs-7 text-secondary">
                                  
                                  چراغ قوه و نورافکن
                                </p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text">مجله</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text">درباره انارام</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text">وارتا</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* tell */}
              <div className="tel-container">
                <div className="tel-inner-container">
                  <div className="tel-wraper">
                    <span className="tel-span-title">
                      <a href="tel:+982187185450" className="tel-num">
                        ۰۲۱-۸۷۱۸۵۴۵۰
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NavbarComponent;
