import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import SingleProductDetails from "../../pages/Home/SingleProductDetails/SingleProductDetails";
import Login from "../../pages/Login/Login";
import ProductsCard from "../../pages/ProductsCard/ProductsCard";
import SignUp from "../../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsCard />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/products/:id",
        element: <SingleProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
