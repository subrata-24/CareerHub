import React from "react";
import AppLayout from "./layout/app.layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import JobseekerHome from "./jobseeker/SeekerHome";
import RoleSelection from "./components/RoleSelection";
import { SignIn, SignUp } from "@clerk/clerk-react";
import EmployeeHome from "./employee/EmployeeHome";
import AfterSignInRouter from "./auth/AfterSignInRouter";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/jobseeker/home", element: <JobseekerHome /> },
      { path: "/employee/home", element: <EmployeeHome /> },
      { path: "/role", element: <RoleSelection /> },

      {
        path: "/sign-in/*",
        element: (
          <div className="flex justify-center p-8">
            <SignIn
              routing="path"
              path="/sign-in"
              forceRedirectUrl="/after-login"
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
              signInForceRedirectUrl="/after-login"
            />
          </div>
        ),
      },

      { path: "/after-login", element: <AfterSignInRouter /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
