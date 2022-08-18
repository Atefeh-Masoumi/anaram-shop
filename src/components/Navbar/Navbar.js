import "./navbar.css";
import logo from "../../asset/images/Anaram-logo-main.png";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
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
                className="me-2 navbar-search-input"
              />
            </div>
            {/* cart and login */}
            <div className="d-flex ">
              <div className="login-container">
                <Link to={"/profile"} className="navabr-login-btn d-flex">
                  <FaRegUser fontSize={"18px"} className="pl-2" />
                  <p>ورود و عضویت</p>
                </Link>
              </div>
              <div className="shopcart me-4">
                <BiShoppingBag fontSize={"1.5rem"} className="" />
              </div>
            </div>
          </div>
        </section>
        <section className="nav-bottom">
          <div className="nav-menu">
            <div className="d-flex align-items-center align-content-center justify-content-center menu-container">
              <div className="main-menu">
                <ul>
                  <li>
                    <Link to="#" className="main-menu-link">
                      <span className="menu-item-text"></span>
                    </Link>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NavbarComponent;
