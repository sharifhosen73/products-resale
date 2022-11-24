import React from "react";

const SingleCategoryProducts = ({ category }) => {
  const {
    name,
    image_url,
    original_price,
    resale_price,
    details,
    used,
    seller_name,
  } = category;
  return (
    <div>
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-semibold">Price: ${original_price}</p>
        <p className="text-xl font-semibold">Price: ${resale_price}</p>
        <p className="text-justify">Used: {used}</p>
        <p className="text-justify">{details}</p>
        <div>
          <span>Seller Name: {seller_name}</span>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryProducts;
