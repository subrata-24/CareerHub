import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

const JobSeekerAuth = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* শুধু SignIn রাখলেই হবে, Clerk ওখান থেকে SignUp এ নিয়ে যাবে */}
      <SignIn
        path="/jobseeker-auth"
        routing="path"
        signUpUrl="/jobseeker-auth"
        afterSignInUrl="/jobseeker/user"
      />
    </div>
  );
};

export default JobSeekerAuth;
