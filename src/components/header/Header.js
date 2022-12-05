import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/danyal.jpg";
// import '../../index.css'

const Header = (props) => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <Link className="col-4 d-flex nav-link align-content-center" to="/">
              <div
                id="img"
                class="crop border border-dark border-2 rounded-circle"
              >
                <img src={img} alt="Danyal" />
              </div>
              <h1 className="mt-2 text-uppercase btn text-white fw-bold fs-4">
                Danyal Ahmad
              </h1>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link
                    className="nav-link fw-bold text-uppercase mx-3"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold text-uppercase mx-3"
                    to="/skills"
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold text-uppercase mx-3"
                    to="/Donations"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold text-uppercase mx-3"
                    to="/education"
                  >
                    Education
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
