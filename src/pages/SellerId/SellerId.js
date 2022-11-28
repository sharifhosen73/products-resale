import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SellerId = () => {
  const { user } = useContext(AuthContext);
  const [radio, setRadio] = useState(false);

  const handleRadio = () => {
    setRadio(!radio);
    console.log(radio);
  };

  const handleSeller = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const select = form.select.value;
    const checkbox = radio;
    const seller = {
      name,
      email,
      select,
      checkbox,
    };
    fetch("https://resale-bike-server.vercel.app/users/seller", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(seller),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Seller Added");
      });
  };

  return (
    <div className="w-3/4 mx-auto bg-gray-100 my-20 p-10">
      <h1 className="text-5xl text-center">Comment</h1>
      <form onSubmit={handleSeller}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
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
            name="email"
            defaultValue={user?.email}
            disabled
            placeholder="email"
            className="input input-bordered"
          />
        </div>

        <select name="select" className="select select-bordered w-full my-4">
          <option value="Seller" selected>
            Seller
          </option>
          <option value="Silver Seller">Silver Seller</option>
          <option value="Golden Seller">Golden Seller</option>
        </select>

        <div className="form-control">
          <label className="flex items-center ">
            <input
              type="checkbox"
              name="checkbox"
              className="radio checked:bg-blue-500 "
              onClick={handleRadio}
              value={radio ? "checked" : ""}
            />
            <span className="label-text px-3">All Rules Accept</span>
          </label>
        </div>

        <div className="form-control mt-6">
          <input type="submit" value="Seller Add" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default SellerId;
