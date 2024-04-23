import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
  return (
    <div>
      <Navbar />
      {/* Outlet is where the active route will be rendered */}
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Root;
