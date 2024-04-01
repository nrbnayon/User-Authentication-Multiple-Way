import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import BlogDetails from "../Components/Blog/BlogDetails";

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
        path: "/blogs",
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
      },
      {
        path: "/bookmarks",
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        element: <Bookmarks />,
      },
    ],
  },
]);

export default router;
