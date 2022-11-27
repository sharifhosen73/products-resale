import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import SingleSellerProduct from "./SingleSellerProduct";

const ShowSellerProduct = () => {
  const [sellerProducts, setSellerProducts] = useState([]);
  const { user } = useContext(AuthContext);
  console.log("sellerProducts", sellerProducts);

  useEffect(() => {
    fetch(`http://localhost:5000/products/seller?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSellerProducts(data);
      });
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-5xl text-center font-semibold">
        Seller Post Product
      </h1>
      <div className="mt-10 grid gap-8 grid-cols-1 lg:grid-cols-2">
        {sellerProducts.map((product) => (
          <SingleSellerProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShowSellerProduct;
