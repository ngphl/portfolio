import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Root() {
  return (
    <>
      <Navbar />
      {/* Outlet is where the active route will be rendered */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
