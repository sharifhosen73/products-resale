import React from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const MySeller = () => {
  const { data: sellers = [] } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-bike-server.vercel.app/users/seller"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeSeller = (id) => {
    fetch(`https://resale-bike-server.vercel.app/users/seller/${id}`, {
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

  console.log("sellers", sellers);

  return (
    <div className="mx-10">
      <div className="overflow-x-auto">
        <h1 className="text-5xl font-semibold text-center text-primary my-5">
          Create Seller
        </h1>
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
                      onClick={() => handleMakeSeller(seller._id)}
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
