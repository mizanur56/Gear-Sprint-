import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import AllProduct from "../pages/AllProduct/AllProduct";
import AddProduct from "../pages/Management/AddProduct/AddProduct";
import AdminLayout from "../layout/AdminLayout";
import ProductManagement from "../pages/Management/ProductManagement/ProductManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/allProduct",
        element: <AllProduct />,
      },
    ],
  },
  {
    path: "/management",
    element: <AdminLayout />,
    children: [
      {
        path: "/management/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/management/productManagement",
        element: <ProductManagement />,
      },
    ],
  },
]);
