import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("Successfully Login");
        navigate(from, { replace: true });

        getUserToken(user.email);
      })
      .catch((error) => {});
  };

  const handleGoogle = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.error(error));
  };

  const getUserToken = (email) => {
    fetch(`https://resale-bike-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
        }
      });
  };

  return (
    <div className="w-full lg:w-2/5 mx-auto lg:mt-32">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <h1 className="text-4xl">Login</h1>
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
          <label className="label">
            <Link className="label-text-alt link link-hover">
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
      <p>
        New User
        <Link to="/signup" className="text-primary font-semibold pl-1">
          Create Account
        </Link>
      </p>
      <div className="divider">OR</div>
      <button onClick={handleGoogle} className="btn btn-outline w-full">
        Sign Up With Google
      </button>
    </div>
  );
};

export default Login;
