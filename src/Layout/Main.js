import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import SideHeader from "../pages/Shared/SideHeader/SideHeader";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <div className="grid lg:col-span-2">
        <div className="w-1/4">
          <SideHeader />
        </div>
        <div className="3/4">
          <Outlet />
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Main;
