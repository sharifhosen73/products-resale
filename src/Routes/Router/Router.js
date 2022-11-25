import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryProduct from "../../pages/Home/CategoryProduct/CategoryProduct";
import Home from "../../pages/Home/Home/Home";
import SingleProductDetails from "../../pages/Home/SingleProductDetails/SingleProductDetails";
import Login from "../../pages/Login/Login";
import ProductsCard from "../../pages/ProductsCard/ProductsCard";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRouter from "../../PrivateRouter/PrivateRouter";

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
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRouter>
            <SingleProductDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/product/category/:id",
        element: <CategoryProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
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
