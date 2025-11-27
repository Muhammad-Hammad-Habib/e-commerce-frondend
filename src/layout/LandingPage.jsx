import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CartSideBar from "../component/CartSideBar";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="container-lg bg-[#FFF6E5] ">
      <Navbar toggleCart={toggleCart} />
      <Outlet />
      <CartSideBar isOpen={isCartOpen} toggleCart={toggleCart} />
      <Footer />
    </div>
  );
};

export default LandingPage;
