import React from "react";
import HeroSection from "../component/HeroSection";
import FeaturedProducts from "../component/FeaturedProducts";
import WhyChooseUs from "../component/WhyChooseUs";
import BrowseCategories from "../component/BrowseCategories";
import AboutUs from "../component/AboutUs";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <BrowseCategories />
      <AboutUs />
      <Footer/>
    </>
  );
};

export default Home;
