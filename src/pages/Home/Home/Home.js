import React from "react";
import ProductsCard from "../../ProductsCard/ProductsCard";
import SideHeader from "../../Shared/SideHeader/SideHeader";
import AboutProduct from "../AboutProduct/AboutProduct";
import MainBanner from "../MainBanner/MainBanner";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <div className="flex w-full">
        <div className="w-1/5 ">
          <SideHeader />
        </div>
        <div className="w-4/5">
          <ProductsCard />
          <AboutProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
