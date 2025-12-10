import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CartSideBar from "../component/CartSideBar";
import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  return (
    <div className="container-lg bg-[#FFF6E5] ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
