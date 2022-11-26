import React, { useEffect, useState } from "react";

const MySeller = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/seller")
      .then((res) => res.json())
      .then((data) => {
        setSellers(data);
      });
  }, []);

  console.log("sellers", sellers);

  return (
    <div>
      <h1 className="text-5xl">Seller</h1>
      <div className="overflow-x-auto">
        <h1 className="text-5xl text-center">Create Seller</h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Seller</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td> {seller.email} </td>
                <td>
                  {seller?.role !== "admin" && (
                    <button
                      //   onClick={() => handleMakeAdmin(seller._id)}
                      className="btn btn-primary"
                    >
                      Make Seller
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
    </div>
  );
};

export default MySeller;