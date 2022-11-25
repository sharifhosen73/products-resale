import React from "react";
import image from "../../../images/mt-15-2-062e4b1d700b63.webp";

const AboutProduct = () => {
  return (
    <div className="hero my-10">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={image}
          className="max-w-sm w-1/2 rounded-lg shadow-2xl"
        />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">See Brand Products</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
