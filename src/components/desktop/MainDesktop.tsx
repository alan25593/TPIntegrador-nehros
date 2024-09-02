import Proyects from "@/components/desktop/Proyects";
import AboutUs from "@/components/desktop/AboutUs";
import Contact from "@/components/desktop/Contact";
import Services from "@/components/desktop/Services";
import React from "react";
import Home from "@/components/desktop/Home";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import Pricing from "@/components/desktop/Pricing";
import Footer from "@/components/desktop/Footer";

const MainDesktop = () => {
  return (
    <div className="fadeIn hidden md:block">
      <ScrollToTopButton />
      <div>
        <Home />
      </div>
      <div id="servicios">
        <Services />
      </div>
      <div id="aboutus">
        <AboutUs />
      </div>
      <div id="proyectos">
        <Proyects />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contacto">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainDesktop;
