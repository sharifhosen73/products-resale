import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Contact = () => {
  const { user } = useContext(AuthContext);

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const name = user?.displayName;
    const email = user?.email;

    const comment = {
      name,
      email,
      message,
    };

    fetch("https://resale-bike-server.vercel.app/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div className="w-3/4 mx-auto bg-gray-100 my-20 p-10">
      <h1 className="text-5xl text-center">Comment</h1>
      <form onSubmit={handleComment}>
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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <textarea
            name="message"
            className="textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
