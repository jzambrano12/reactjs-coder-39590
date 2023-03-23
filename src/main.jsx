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

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1IMvwDj7lX8F9bu42gR8qjF3IarjoYlE",
  authDomain: "ecommerce-39590-coder.firebaseapp.com",
  projectId: "ecommerce-39590-coder",
  storageBucket: "ecommerce-39590-coder.appspot.com",
  messagingSenderId: "156958842349",
  appId: "1:156958842349:web:95d3d8b9d1766c0d6f5be4",
};

initializeApp(firebaseConfig);

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
