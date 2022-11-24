import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleProductDetails = () => {
  const product = useLoaderData();
  const { name, image_url, price, details } = product;
  return (
    <div className="card w-4/5 mx-auto my-10 bg-base-100 shadow-xl">
      <img
        src={image_url}
        alt="Shoes"
        className="rounded-xl h-96 lg:h-[450px]"
      />
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-semibold">Price: ${price}</p>
        <p className="text-justify">{details}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
