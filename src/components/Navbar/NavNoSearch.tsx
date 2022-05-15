import React from "react";
import { Link } from "react-router-dom";
import shoppingCartImage from '../assets/shoppingCart.png'

const NavNoSearch = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary  ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hi, Admin mayshe
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  Logout
                </Link>
              </div>
            </li>
            <li className="nav-item ">
              {/* <Link to="/cart" className="d-none d-md-block">
                <div className="">
                  <img
                    src={shoppingCartImage}
                    style={{ width: "40px" }}
                    alt=""
                  />
                  <span className="badge " style={{ paddingTop: "3.5rem" }}>
                    5
                  </span>
                </div>
              </Link> */}
              <Link to="/cart" className="text-decoration-none">
                <img src={shoppingCartImage} style={{ width: "40px" }} alt="" />
                <span
                  className="d-inline p-2  text-white"
                  style={{ borderRadius: "100px", backgroundColor: "#a80000" }}
                >
                  5
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavNoSearch;
