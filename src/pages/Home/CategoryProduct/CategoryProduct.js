import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategoryProducts from "./SingleCategoryProducts";

const CategoryProduct = () => {
  const category = useLoaderData();
  return (
    <div className="my-10">
      <h1 className="text-3xl mb-4 text-center font-semibold text-primary">
        Category Product
      </h1>
      <div className="card  grid gap-8 grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl">
        {category.map((category) => (
          <SingleCategoryProducts key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
