import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex my-10">
        <div className="w-1/5 bg-gray-100 ">
          <h1 className="text-xl text-primary text-center my-10">
            My Dashboard
          </h1>
          <Link className="text-xl ml-10 pb-3" to="/dashboard/users">
            User
          </Link>{" "}
          <br />
          <Link className="text-xl ml-10 pb-3" to="/dashboard/sellers">
            Seller
          </Link>
        </div>
        <div className="w-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
