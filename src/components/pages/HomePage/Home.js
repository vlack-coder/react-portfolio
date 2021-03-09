import React from "react";
import "./Home.css";
import BioSection from "../../BioSection";
import Toolbox from "../../Toolbox";
import Contact from "../../Contact";
import Footer from "../Footer.js/Footer"
import Project from "../../Project";

function Home() {
  return (
    <>
      {/* <div className="cursor cursor--hidden" >u</div> */}
      <BioSection />
      {/* <HeroSection/> */}
      <Toolbox/>
      <Project/>
      <Contact/>
      <Footer/>
      {/* <HeroSection {...homeObjOne} /> */}
      {/* <Pricing/> */}
    </>
  );
}

export default Home;
