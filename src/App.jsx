import React from "react";
import AppLayout from "./layout/app.layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import JobseekerHome from "./jobseeker/SeekerHome";
import RoleSelection from "./components/RoleSelection";
import { SignIn, SignUp } from "@clerk/clerk-react";
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
        path: "/role",
        element: <RoleSelection />,
      },
      {
        path: "/employee/home",
        element: <EmployeeHome />,
      },

      {
        path: "/sign-in/*",
        element: (
          <div className="flex justify-center p-8">
            <SignIn
              routing="path"
              path="/sign-in"
              forceRedirectUrl="/jobseeker/home"
              signUpForceRedirectUrl="/role"
            />
          </div>
        ),
      },

      {
        path: "/sign-up/*",
        element: (
          <div className="flex justify-center p-8">
            <SignUp
              routing="path"
              path="/sign-up"
              forceRedirectUrl="/role"
              signInForceRedirectUrl="/jobseeker/home"
            />
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
