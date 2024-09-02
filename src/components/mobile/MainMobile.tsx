import React from "react";
import Navbar from "./Navbar";
import Proyects from "./Proyects";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Home from "./Home";
import Footer from "./Footer";

const MainMobile = () => {
  return (
    <div className="fadeIn block md:hidden">
      <Navbar />
      <div>
        <Home />
      </div>
      <div id="servicios">
        <Services />
      </div>
      <div id="nosotros">
        <AboutUs />
      </div>
      <div id="proyectos">
        <Proyects />
      </div>
      <div id="plan">
        <Pricing />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainMobile;
