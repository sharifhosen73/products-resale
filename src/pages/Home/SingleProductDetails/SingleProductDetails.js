import React from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "../BookModal/BookModal";

const SingleProductDetails = () => {
  const product = useLoaderData();
  const {
    name,
    image_url,
    original_price,
    resale_price,
    details,
    used,
    seller_name,
    location,
    brand,
  } = product;
  return (
    <div className="w-4/5 mx-auto my-10">
      <img src={image_url} alt="Shoes" className="rounded-xl h-96 w-full" />

      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl font-semibold">Price: ${original_price}</p>
        <p className="text-xl font-semibold">Price: ${resale_price}</p>
        <p className="text-justify">Used: {used}</p>
        <p className="text-justify">{details}</p>
        <div className="flex justify-between pt-3 ">
          <div>
            <span>Seller Name: {seller_name}</span> <br />
            <span>{location}</span> <br />
            <span>Brand: {brand}</span>
          </div>
          <div className="card-actions">
            <label htmlFor="bookingModal" className="btn">
              Book Now
            </label>
          </div>
        </div>
        <BookModal />
      </div>
    </div>
  );
};

export default SingleProductDetails;
