import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../../AdminRoute/AdminRoute";
import SellerRoute from "../../AdminRoute/SellerRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import MySeller from "../../pages/Dashboard/MySeller/MySeller";
import MyUsers from "../../pages/Dashboard/MyUsers/MyUsers";
import CategoryProduct from "../../pages/Home/CategoryProduct/CategoryProduct";
import Home from "../../pages/Home/Home/Home";
import SingleProductDetails from "../../pages/Home/SingleProductDetails/SingleProductDetails";
import Login from "../../pages/Login/Login";
import ProductsCard from "../../pages/ProductsCard/ProductsCard";
import SellerPostCreate from "../../pages/SellerDasboard/SellerPostCreate/SellerPostCreate";
import ShowSellerProduct from "../../pages/SellerDasboard/ShowSellerProduct/ShowSellerProduct";
import SellerId from "../../pages/SellerId/SellerId";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRouter from "../../PrivateRouter/PrivateRouter";
import SellerLayout from "./../../Layout/SellerLayout";

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
      {
        path: "createseller",
        element: (
          <PrivateRouter>
            <SellerId />
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <AdminRoute>
              <DashboardLayout />
            </AdminRoute>
          </PrivateRouter>
        ),
        children: [
          {
            path: "/dashboard/users",
            element: <MyUsers />,
            loader: () => fetch("http://localhost:5000/users"),
          },
          {
            path: "/dashboard/sellers",
            element: <MySeller />,
          },
        ],
      },
      {
        path: "/dashboard/seller",
        element: (
          <SellerRoute>
            <SellerLayout />
          </SellerRoute>
        ),
        children: [
          {
            path: "/dashboard/seller",
            element: <SellerPostCreate />,
          },
          {
            path: "/dashboard/seller/my-product",
            element: <ShowSellerProduct />,
          },
        ],
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
