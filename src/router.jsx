import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./layout/LandingPageLayout";
import Home from "./pages/Home";
import Products from "./component/Products";
import Checkout from "./component/Checkout";
// import CheckoutPageLayout from "./layout/";

const router = createBrowserRouter([
  // landing page Layout
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "",
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
    ],
  },
  
]);
export default router;
