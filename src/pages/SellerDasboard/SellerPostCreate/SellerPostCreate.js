import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const SellerPostCreate = ({ updateProduct }) => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  console.log("handleUpdate", updateProduct);

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
        console.log(imgData);
        if (imgData.success) {
          const createProduct = {
            seller_name: user?.user?.displayName,
            email: user?.user?.email,
            name: data.name,
            resale_price: data.resale_price,
            original_price: data.original_price,
            brand: data.brand,
            details: data.details,
            used: data.used,
            image_url: imgData.data.url,
          };

          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(createProduct),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Successfully product added");
              // navigate('/dashboard/managedoctors')
            });
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
            {...register("seller_name")}
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
            {...register("name")}
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
            {...register("resale_price")}
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
            {...register("original_price")}
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
            {...register("brand")}
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
            <span className="label-text">Used</span>
          </label>
          <input
            type="type"
            {...register("used")}
            placeholder="Used"
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
