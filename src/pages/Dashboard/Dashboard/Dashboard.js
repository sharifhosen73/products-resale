import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleProduct from "./SingleProduct";

const Dashboard = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://resale-bike-server.vercel.app/products`).then((res) =>
        res.json()
      ),
  });

  return (
    <div className=" my-10">
      <div className=" bg-gray-100">
        <h1 className="text-xl">My Dashboard</h1>
      </div>
      <div className=" grid gap-8 grid-cols-1 lg:grid-cols-2">
        {products.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
