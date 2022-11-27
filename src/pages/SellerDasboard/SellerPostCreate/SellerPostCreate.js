import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";

const SellerPostCreate = () => {
  const { register, handleSubmit } = useForm();
  const user = useContext(AuthContext);

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleCreatePost = (data) => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const createProduct = {
            name: user?.user?.displayName,
            email: user?.user?.email,
            productName: data.productName,
            sellPrice: data.sellPrice,
            originalPrice: data.originalPrice,
            brandName: data.brandName,
            details: data.details,
            image: imgData.data.url,
          };
          console.log(createProduct);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleCreatePost)} className="card-body">
        <h1 className="text-5xl text-center text-primary">Post New Product</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            defaultValue={user?.user?.displayName}
            {...register("name")}
            placeholder="name"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            defaultValue={user?.user?.email}
            {...register("email")}
            placeholder="email"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="type"
            {...register("productName")}
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
            {...register("sellPrice")}
            placeholder="Sell Price"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="type"
            {...register("originalPrice")}
            placeholder="Original Price"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input
            type="type"
            {...register("brandName")}
            placeholder="Brand Name"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input
            type="type"
            {...register("details")}
            placeholder="Details"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            {...register("image")}
            placeholder="Product Image"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <input type="submit" value="Sign Up" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default SellerPostCreate;
