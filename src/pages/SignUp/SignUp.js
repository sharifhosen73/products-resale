import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [createUserEmail, setCreateUserEmail] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.error(error));
      })
      .then((error) => {
        console.log(error);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreateUserEmail(email);
      });
  };

  return (
    <div className="w-full lg:w-2/5 mx-auto lg:mt-32">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h1 className="text-4xl">Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
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
            {...register("email")}
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="password"
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

export default SignUp;
