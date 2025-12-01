import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./layout/LandingPageLayout";
import Home from "./pages/Home";
import Products from "./component/Products";
import Checkout from "./component/Checkout";
import User from "./Dashboard/User/UserDashboard";
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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      // Pages route end

      // User route start
      {
        path: "/user",
        children: [
          {
            index: true,
            element: <User />,
          },
        ],
      },
    ],
  },
]);
export default router;
