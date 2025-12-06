import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./layout/LandingPageLayout";
import Home from "./pages/Home";
import Products from "./component/Products";
import Checkout from "./component/Checkout";
import User from "./Dashboard/User/UserDashboard";
import AdminDashboardLayout from "./layout/AdminDashboardLayout";
import AdminHome from "./Dashboard/Admin/AdminHome";
import CategoryManager from "./Dashboard/Admin/CategoryManager";
import ProductsManager from "./Dashboard/Admin/ProductsManager";
import OrderManager from "./Dashboard/Admin/OrderManager";
// import CheckoutPageLayout from "./layout/";

const router = createBrowserRouter([
  // landing page Layout
  {
    path: "/",
    element: <LandingPage />,
    children: [
      // Pages route start
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      // Pages route end

      // User route start from here
      {
        path: "user",
        children: [
          {
            index: true,
            element: <User />,
          },
        ],
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path:"category-manager", element: <CategoryManager /> },
      { path:"product-manager", element: <ProductsManager /> },
      { path:"order-manager", element: <OrderManager /> },
    ],
  },
]);
export default router;
