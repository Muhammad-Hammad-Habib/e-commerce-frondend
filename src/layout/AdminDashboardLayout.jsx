import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CartSideBar from "../component/CartSideBar";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../Dashboard/Admin/AdminNavbar";

const AdminDashboardLayout = () => {
  return (
    <div className="container-lg bg-[#FFF7ED] ">
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
