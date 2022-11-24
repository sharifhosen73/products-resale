import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { _id, name, image_url, price, details } = product;
  return (
    <div className="border rounded-lg  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body pl-8">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl">Price: ${price}</p>
        <p className="text-justify">{details}</p>
        <div className="card-actions">
          <Link to={`/products/${_id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
