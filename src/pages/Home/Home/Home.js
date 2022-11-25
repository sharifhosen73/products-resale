import React from "react";
import ProductsCard from "../../ProductsCard/ProductsCard";
import SideHeader from "../../Shared/SideHeader/SideHeader";
import AboutProduct from "../AboutProduct/AboutProduct";
import Contact from "../Contact/Contact";
import MainBanner from "../MainBanner/MainBanner";
import ShowComment from "../ShowComment/ShowComment";

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
        </div>
      </div>
      <AboutProduct />
      <ShowComment />
      <Contact />
    </div>
  );
};

export default Home;
