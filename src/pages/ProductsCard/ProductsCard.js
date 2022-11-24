import React from "react";
import ProductItem from "../Home/ProductItem/ProductItem";
import { useLoaderData } from "react-router-dom";

const ProductsCard = () => {
  const products = useLoaderData();

  console.log(products);
  return (
    <div className="my-10">
      <h1 className="text-5xl mb-7 text-center font-semibold">Products</h1>
      <div className="card grid gap-8 grid-cols-1 lg:grid-cols-3 ">
        {products.map((product) => (
          <ProductItem key={products._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
