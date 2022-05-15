import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
   
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className=" col-12 col-lg-6 offset-lg-2   justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="" >
                <i className="fab fa-facebook-f mx-3"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram  mx-3"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in  mx-3"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube  mx-3"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p  "></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Header;
