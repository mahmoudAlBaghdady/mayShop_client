import React from "react";
import { Link } from "react-router-dom";
import Header from "../Navbar/Header";
import NavNoSearch from "../Navbar/NavNoSearch";

const Payment = () => {
  return (
    <>
      <Header />
      <NavNoSearch />

      <div className="container d-flex justify-content-center align-items-center login-center">
        <form className="Login2 col-md-8 col-lg-6 col-11 shadow-lg">
          <legend>SELECT PAYMENT METHOD</legend>
          <div className="payment-container">
            <div className="radio-container">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="paypal"
                />
                <label className="form-check-label" htmlFor="paypal">
                  <h5> Paypal Or Credit Card</h5>
                </label>
              </div>
            </div>
            <div className="radio-container">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="onDelivery"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="onDelivery">
                  <h5> Cash On Delivery</h5>
                </label>
              </div>
            </div>
          </div>

          <button>
            <Link
              to="/placeorder"
              className="text-white text-decoration-none   "
            >
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
