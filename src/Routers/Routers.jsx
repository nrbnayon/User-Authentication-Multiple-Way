import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "./../Pages/Auth/Login";
import SignUp from "./../Pages/Auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
