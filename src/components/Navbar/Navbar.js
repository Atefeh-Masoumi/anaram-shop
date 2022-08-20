import "./navbar.css";
import logo from "../../asset/images/Anaram-logo-main.png";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import bateryghlmi from "../../asset/images/battery-ghlami.webp";
import baterynimghlmi from "../../asset/images/battery-nim-ghalami.webp";
import baterysizec from "../../asset/images/batery-size-c.webp";
import baterysized from "../../asset/images/battery-size-d.webp";
import bateryketabi from "../../asset/images/battery-ketabi.webp";
import bateryseke from "../../asset/images/batery-sekei.webp";

const NavbarComponent = () => {
  return (
    <>
      <div className="nav-container">
        <section className="top-nav">
          <div className="nav-top-container">
            {/* logo */}
            <div className="logo-container">
              <img src={logo} alt="logo" className="logo" />
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
              {/* login */}
              <div className="login-container shopcart-container">
                <Link to={"/profile"} className="navabr-login-btn d-flex">
                  <FaRegUser
                    fontSize={"18px"}
                    className="pl-2 bg-transparent "
                    color="#fff"
                  />
                </Link>
              </div>
              {/* Cart */}
              <div className="shopcart-container me-4">
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
                        <ul className="sub-menu ">
                          <li className="w-full">
                            <Link to="#" >
                              <img src={bateryghlmi} alt="باتری قلمی" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={baterynimghlmi} alt="باتری نیم قلمی" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={baterysizec} alt="باتری سایز c" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={baterysized} alt="باتری سایز d" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={bateryketabi} alt="باتری کتابی" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={bateryseke} alt="باتری سکه ای " />
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text">
                            باتری براساس کاربرد{" "}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text">
                            باتری براساس تکنولوژی{" "}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text">شارژر باتری</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="main-menu-link">
                          <span className="menu-item-text">چراغ روشنایی</span>
                        </Link>
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
