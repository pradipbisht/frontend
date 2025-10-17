import React from "react";
import HeroSection from "./pages/hero-section/HeroSection";
import PetScetion from "./pages/pets/PetScetion";
import Skincare from "./pages/skincare/Skincare";
import AboutPage from "./about/page";
// import GridAllBento from "./pages/grid-all/GridAllBento";

function page() {
  return (
    <div>
      <div>
        <HeroSection />
        <AboutPage />
      </div>
    </div>
  );
}

export default page;
