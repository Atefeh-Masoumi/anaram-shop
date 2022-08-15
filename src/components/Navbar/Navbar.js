import React from "react";
import "./navbar.css";
import logo from "../../asset/images/Anaram-logo-main.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <div className="Navbarcontainer">
    <section className="navbar-topsection">
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed="top">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} />
            </Navbar.Brand>
            {/* search */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="جستجوی محصولات..."
                className="me-2 navbar-search-input"
                aria-label="Search"
                
              />
            </Form>
            {/* login */}
            <div className="">
            <Link to={"/profile"} className="navabr-login-btn">
              <FaRegUser fontSize={"18px"} className="ml-4"/>
              <p>ورود و عضویت</p>
            </Link>
            
            
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="shop-icon"
            />
            </div>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  سبدخرید
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">سبدخرید شما خالی است</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </section>
      {/* nav bottom product */}
      <section className="d-flex">
        <div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            
        </Navbar.Collapse>
        </div>

      </section>
    </div>
  );
};

export default NavbarComponent;
