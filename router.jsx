import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import App from "../App";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import Checkout from "../home/checkout"; // Ensure this path matches your actual file structure
import BookDetail from "../components/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/books/:id",
        element: <BookDetail/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/api/books/book/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload-book",
        element: <UploadBooks />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/api/books/book/${params.id}`).then((res) =>
            res.json()
          ),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

export default router;
