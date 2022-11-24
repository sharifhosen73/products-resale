import React from "react";
import ProductsCard from "../../ProductsCard/ProductsCard";
import AboutProduct from "../AboutProduct/AboutProduct";
import MainBanner from "../MainBanner/MainBanner";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <ProductsCard />
      <AboutProduct />
    </div>
  );
};

export default Home;
