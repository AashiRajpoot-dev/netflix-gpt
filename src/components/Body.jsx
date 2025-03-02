import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const AppRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true, // Enables React Router v7 behavior
        v7_startTransition: true,   // Enable startTransition for React Router v7
      },
    }
  );

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
