import React from "react";
import { Link } from "react-router-dom";
import Header from "../Navbar/Header";
import NavNoSearch from "../Navbar/NavNoSearch";

const Shipping = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <NavNoSearch />
      <div className="container d-flex justify-content-center align-items-center login-center ">
        <form className="Login col-md-8 col-lg-6 col-11 shadow-lg">
          <h6>DELIVERY ADDRESS</h6>
          <input type="text" placeholder="Enter address" />
          <input type="text" placeholder="Enter city" />
          <input type="text" placeholder="Enter postal code" />
          <input type="text" placeholder="Enter country" />
          <input type="tel" placeholder="Enter Phone Number" />
          <button type="submit">
            <Link to="/payment" className="text-decoration-none text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Shipping;
