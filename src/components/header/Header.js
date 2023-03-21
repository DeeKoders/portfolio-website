import React from "react";
import { Navbar, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../images/danyal.jpg";
function Header() {
  return (
    <Navbar
      bg="none"
      expand="lg"
      className=" d-flex justify-content-between p-3"
    >
      <Col md={4} className="d-flex">
        <Navbar.Brand href="#">
          <Link className="d-flex nav-link align-content-center" to="/">
            <div
              id="img"
              className="crop border border-dark border-2 rounded-circle"
            >
              <img src={img} alt="Danyal" />
            </div>
            <h1 className="mt-2 text-uppercase btn text-white fw-bold fs-4">
              Danyal Ahmad
            </h1>
          </Link>
        </Navbar.Brand>
      </Col>
      <Col md={8}>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Link
              className="nav-link fw-bold text-uppercase mx-3 text-white nav-item-custom"
              aria-current="page"
              to="/"
            >
              Home
            </Link>

            <Link
              className="nav-link fw-bold text-uppercase mx-3 text-white nav-item-custom"
              to="/skills"
            >
              Skills
            </Link>
            <Link
              className="nav-link fw-bold text-uppercase mx-3 text-white nav-item-custom"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="nav-link fw-bold text-uppercase mx-3 text-white nav-item-custom"
              to="/education"
            >
              Education
            </Link>
            <Nav.Link href="#" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Navbar>
  );
}

export default Header;
