import React from "react";
import AppLayout from "./layout/app.layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import JobseekerHome from "./jobseeker/SeekerHome";
import EmployeeHome from "./employee/EmployeeHome";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobseeker/home",
        element: <JobseekerHome />,
      },
      {
        path: "/employee/home",
        element: <EmployeeHome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
