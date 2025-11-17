import React from "react";
import Navbar from "../component/Navbat";
import HeroSection from "../component/HeroSection";
import FeaturedProducts from "../component/FeaturedProducts";

const LandingPage = () => {
  return (
    <div className="container-lg bg-[#FFF6E5] h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProducts/>
    </div>
  );
};

export default LandingPage;
