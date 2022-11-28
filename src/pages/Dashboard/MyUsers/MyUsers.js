import React from "react";

import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const MyUsers = () => {
  const users = useLoaderData();

  console.log("sharif", users);

  const handleMakeAdmin = (id) => {
    fetch(`https://resale-bike-server.vercel.app/users/admin/${id}`, {
      method: "put",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Added Admin Success");
        }
      });
  };

  return (
    <div className=" px-10 ">
      <h1 className="text-5xl font-semibold text-center text-primary my-5">
        My Users
      </h1>

      <div className="overflow-x-auto">
        <h1 className="text-3xl text-center my-5">Create Admin</h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td> {user.email} </td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-square btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  );
};

export default MyUsers;
