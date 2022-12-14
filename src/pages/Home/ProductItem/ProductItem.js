import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const ProductItem = ({ product }) => {
  const {
    _id,
    name,
    email,
    image_url,
    original_price,
    resale_price,
    details,
    used,
    seller_name,
  } = product;
  return (
    <div className="border rounded-lg  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body pl-8">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-semibold">Price: ${original_price}</p>
        <p className="text-xl font-semibold">Price: ${resale_price}</p>
        <p className="text-justify">Used: {used}</p>
        <div
          className="flex items-center 
        "
        >
          <span className="text-justify">Seller Name: {seller_name}</span>
          <span className="px-4 text-primary">{email && <FaCheck />}</span>
        </div>
        <p className="text-justify">{details}</p>
        <div className="card-actions bottom-0 left-0">
          <Link to={`/products/${_id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
