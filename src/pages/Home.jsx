import React from "react";
import HeroSection from "../component/HeroSection";
import FeaturedProducts from "../component/FeaturedProducts";
import WhyChooseUs from "../component/WhyChooseUs";
import BrowseCategories from "../component/BrowseCategories";
import AboutUs from "../component/AboutUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <BrowseCategories />
      <AboutUs />
    </>
  );
};

export default Home;
