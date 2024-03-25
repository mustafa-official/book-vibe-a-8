import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Books from "../pages/Books";
import Read from "../pages/Read";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/books",
          element: <Books></Books>
        },
        {
          path: "/read",
          element: <Read></Read>
        }
      ]
    },
  ]);

export default router;