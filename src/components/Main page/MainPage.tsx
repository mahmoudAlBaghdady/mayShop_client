import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../Navbar/Navigation";
import NavTabs from "../Navbar/NavTabs";
import ContactUs from "./ContactUs";
import NotifyUs from "./NotifyUs";
import ProductDisplay from "./ProductDisplay";

const MainPage = () => {
  return (
    <>
      <Navigation />
      <NavTabs />
      <ProductDisplay />
      <NotifyUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainPage;
