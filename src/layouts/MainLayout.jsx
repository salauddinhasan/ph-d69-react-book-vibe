import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";
 

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
