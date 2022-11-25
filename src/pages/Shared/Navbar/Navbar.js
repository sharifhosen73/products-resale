import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log("user", user);

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`http://localhost:5000/users/${user?.email}`).then((res) =>
        res.json()
      ),
  });

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
      {users?.role && <Link to="/dashboard">Dashboard</Link>}
      {user?.email ? (
        <>
          <li>
            <Link to="createseller">Create Seller</Link>
          </li>
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
