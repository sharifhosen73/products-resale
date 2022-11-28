import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const { data: admin } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: () =>
      fetch(
        `https://resale-bike-server.vercel.app/users/oneadmin?email=${user?.email}`
      ).then((res) => res.json()),
  });

  const [sellers, setSellers] = useState({});

  useEffect(() => {
    fetch(
      `https://resale-bike-server.vercel.app/users/oneseller?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSellers(data);
      });
  }, [user?.email]);

  console.log("Single seller", sellers.role);

  const handleLogOut = () => {
    logout().then().catch();
  };

  const menuItem = [
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="">About</Link>
      </li>

      {user?.email ? (
        <>
          {sellers?.role === "seller" ? (
            <li>
              <Link to="/dashboard/seller">Dashboard</Link>
            </li>
          ) : (
            <>
              {admin?.role === "admin" ? (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              ) : (
                <li>
                  <Link to="/createseller">Create Seller</Link>
                </li>
              )}
            </>
          )}

          <button onClick={handleLogOut} className="btn ">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="login">Login</Link>
          </li>
        </>
      )}
    </>,
  ];

  return (
    <div className="navbar flex justify-between  bg-orange-500">
      <div className="navbar-start ml-14">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 "
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          Resale Bike
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex mr-14">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
