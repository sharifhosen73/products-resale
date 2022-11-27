import React from "react";
import { Outlet } from "react-router-dom";

const SellerLayout = () => {
  return (
    <div>
      <div className="flex my-10">
        <div className="w-1/5 bg-gray-100 ">
          <h1 className="text-xl text-primary text-center my-10">
            My Dashboard
          </h1>
        </div>
        <div className="w-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
