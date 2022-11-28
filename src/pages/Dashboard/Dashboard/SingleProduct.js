import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const {
    _id,
    email,
    seller_name,
    name,
    original_price,
    resale_price,
    used,
    brand,
    details,
    image_url,
  } = product;
  return (
    <div className="border rounded-lg  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body pl-8">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-semibold">Price: ${original_price}</p>
        <p className="text-xl font-semibold">Resale Price: ${resale_price}</p>
        <p className="text-justify">Used: {used}</p>
        <p className="text-justify">Brand: {brand}</p>
        <p className="text-justify">Seller Name: {seller_name}</p>
        <p className="text-justify">Seller Email: {email}</p>
        <p className="text-justify">{details}</p>
        <div className="card-actions bottom-0 left-0">
          <Link to={`/products/${_id}`} className="btn btn-primary">
            Details
          </Link>

          <Link to="/dashboard/seller" className="btn btn-outline btn-accent">
            Update
          </Link>

          <button className="btn btn-outline btn-accent">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
