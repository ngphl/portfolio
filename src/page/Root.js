import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root() {
  return (
    <div>
      <Navbar />
      {/* Outlet is where the active route will be rendered */}
      <Outlet />
    </div>
  );
}

export default Root;
