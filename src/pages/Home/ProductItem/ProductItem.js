import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const {
    _id,
    name,
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
        <p className="text-justify">Seller Name: {seller_name}</p>
        <p className="text-justify">{details}</p>
        <div className="card-actions bottom-0 left-0">
          <Link to={`/products/${_id}`} className="btn btn-primary">
            Details
          </Link>
          <label htmlFor="my-modal-3" className="btn">
            open modal
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
