// src/route/route.js
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import Blog from "../components/blog/Blog"; // Import Blog component
import BlogPost from "../components/blog/BlogPost"; // Import BlogPost component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog", // Add route for Blog
        element: <Blog />,
      },
      {
        path: "/blog/:slug", // Add route for individual blog posts
        element: <BlogPost />,
      },
    ],
  },
]);

export default router;
