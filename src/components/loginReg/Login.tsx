import React from "react";
import { Link } from "react-router-dom";
import Header from "../Navbar/Header";
import NavNoSearch from "../Navbar/NavNoSearch";

const Login = () => {
  return (
    <>
        <Header/>
        <NavNoSearch/>

        <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-6 col-11">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p className="text-primary">
            <Link to={"/register"} className='text-decoration-none'>Create Account</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
