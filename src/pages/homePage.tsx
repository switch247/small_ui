import React from "react";
import Home from "../components/Home";
import Description from "../components/Description";
import Testmonials from "../components/Testmonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Home />
      <Description />
      <Testmonials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
