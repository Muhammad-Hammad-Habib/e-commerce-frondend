import React from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import FeaturedProducts from "../component/FeaturedProducts";
import WhyChooseUs from "../component/WhyChooseUs";
import BrowseCategories from "../component/BrowseCategories";

const LandingPage = () => {
  return (
    <div className="container-lg bg-[#FFF6E5] ">
      <Navbar />
      <HeroSection />
      <FeaturedProducts/>
      <WhyChooseUs/>
      <BrowseCategories/>
    </div>
  );
};

export default LandingPage;
