import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const SideHeader = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json()),
  });

  return (
    <div className="mt-28 bg-gray-300 h-96 p-3 mr-3">
      <h1 className="text-3xl mb-8">Categories</h1>
      {categories.map((category) => (
        <Link
          to={`/product/category/${category.id}`}
          style={{ display: "block" }}
          className="text-xl py-2"
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default SideHeader;
