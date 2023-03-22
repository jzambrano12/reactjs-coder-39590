import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// Routes
import Layout from "./components/Layout";
import { CustomProvider } from "./context";
import Cart from "./routes/cart";
import ErrorPage from "./routes/error-page";
import Item from "./routes/item";
import Root from "./routes/root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id", // www.coderhouse.com/category/54343434
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/checkout",
      //   element: <div>Hello world!</div>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
