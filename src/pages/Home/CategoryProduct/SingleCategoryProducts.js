import React from "react";
import BookModal from "../BookModal/BookModal";

const SingleCategoryProducts = ({ category }) => {
  const {
    name,
    image_url,
    original_price,
    resale_price,
    details,
    used,
    seller_name,
    location,
  } = category;
  return (
    <div className="bg-base-100 shadow-xl">
      <figure className="w-full h-96">
        <img src={image_url} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-semibold">Price: ${original_price}</p>
        <p className="text-xl font-semibold">Price: ${resale_price}</p>
        <p className="text-justify">Used: {used}</p>
        <p className="text-justify">{details}</p>
        <div className="flex justify-between py-2">
          <div>
            <p>
              <span>Seller Name: {seller_name}</span>
            </p>
            <p>
              <span>Location: {location}</span>
            </p>
          </div>
          <div className="card-actions">
            <label htmlFor="bookingModal" className="btn">
              Book Now
            </label>
          </div>
          <BookModal name={name} price={resale_price} />
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryProducts;
