import React from "react";
import MyUsers from "../MyUsers/MyUsers";

const Dashboard = () => {
  return (
    <div className="flex my-10">
      <div className="w-1/5 bg-gray-100">
        <h1 className="text-xl">My Dashboard</h1>
      </div>
      <div className="w-4/5">
        <MyUsers />
      </div>
    </div>
  );
};

export default Dashboard;
