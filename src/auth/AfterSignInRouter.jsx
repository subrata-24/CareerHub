import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const AfterSignInRouter = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      navigate("/sign-in", { replace: true });
      return;
    }

    const role =
      user?.unsafeMetadata?.role ?? user?.publicMetadata?.role ?? null;

    if (role === "employee") {
      navigate("/employee/home", { replace: true });
    } else if (role === "jobseeker") {
      navigate("/jobseeker/home", { replace: true });
    } else {
      navigate("/role", { replace: true });
    }
  }, [isLoaded, isSignedIn, user, navigate]);

  return <div className="p-8 text-center">Redirecting…</div>;
};

export default AfterSignInRouter;
