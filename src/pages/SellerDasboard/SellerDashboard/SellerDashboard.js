import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";

const SellerDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useContext(AuthContext);

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleCratePost = (data) => {
    const name = user?.user?.displayName;
    const email = user?.user?.email;
    const productName = data.productName;
    const sellPrice = data.sellPrice;
    const originalPrice = data.originalPrice;
    const brandName = data.brandName;
    const details = data.details;
    const image = data.image;
    console.log("Product Image", image);

    console.log(data.image);
    console.log("Data", data);
    const formData = new FormData();
    formData.append("image", image);

    // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("ImageURL", data);
    //   });

    const productAdded = {
      name,
      email,
      productName,
      sellPrice,
      originalPrice,
      brandName,
      details,
    };
    console.log(productAdded);

    // fetch("http://localhost:5000/productAdded", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(productAdded),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     data.   });
  };

  return (
    <div>
      <div className="w-3/4 mx-auto bg-gray-100 my-20 p-10">
        <h1 className="text-5xl text-center text-primary">Post New Product</h1>
        <form onSubmit={handleSubmit(handleCratePost)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: true,
              })}
              defaultValue={user?.user?.displayName}
              disabled
              placeholder="name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: true,
              })}
              defaultValue={user?.user?.email}
              disabled
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("productName", {
                required: true,
              })}
              placeholder="Product Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Sell Price</span>
            </label>
            <input
              type="text"
              {...register("sellPrice", {
                required: true,
              })}
              placeholder="Sell Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", {
                required: true,
              })}
              placeholder="Original Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              {...register("brandName", {
                required: true,
              })}
              name="brandName"
              placeholder="Brand Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea
              {...register("details", {
                required: true,
              })}
              className="textarea textarea-bordered"
              placeholder="Product Details"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              required
              type="file"
              {...register("image", {
                required: true,
              })}
            />
          </div>

          <div className="form-control mt-6">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerDashboard;
