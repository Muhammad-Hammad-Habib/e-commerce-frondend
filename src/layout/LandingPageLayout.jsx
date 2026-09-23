import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CartSideBar from "../component/CartSideBar";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="container-lg bg-[#FFF7ED] ">
      <Navbar toggleCart={toggleCart} />
      <Outlet />
      <CartSideBar isOpen={isCartOpen} toggleCart={toggleCart} />

    </div>
  );
};

export default LandingPage;
