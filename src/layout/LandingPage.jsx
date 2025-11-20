import React from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import FeaturedProducts from "../component/FeaturedProducts";
import WhyChooseUs from "../component/WhyChooseUs";
import BrowseCategories from "../component/BrowseCategories";
import AboutUs from "../component/AboutUs";
import Footer from "../component/Footer";

const LandingPage = () => {
  return (
    <div className="container-lg bg-[#FFF6E5] ">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <BrowseCategories />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
