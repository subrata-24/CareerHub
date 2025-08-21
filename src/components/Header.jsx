import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton, SignIn } from "@clerk/clerk-react";

const Header = () => {
  const [showSignIn, setshowSignIn] = useState(false);

  //  This function closes the SignIn modal only when the user clicks
  //  on the overlay background (not inside the modal box).
  const handleShowOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setshowSignIn(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="font-extrabold text-3xl md:text-4xl text-yellow-400 tracking-wide hover:text-yellow-300 transition-colors">
            CareerHub
          </h1>
        </Link>

        <div className="flex space-x-4 items-center">
          {/* When the user is SignedOut → show this "jobseeker" button.
              Clicking it sets showSignIn(true), which opens the SignIn modal. */}
          <SignedOut>
            <button
              className="border border-black px-2"
              onClick={() => setshowSignIn(true)}
            >
              jobseeker
            </button>
          </SignedOut>

          {/* When the user is SignedIn → show Clerk's UserButton (profile menu). */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {/* If showSignIn === true → render the SignIn modal.
          - signUpForceRedirectUrl="/jobseeker/home": after a successful SignUp, redirect here.
          - fallbackRedirectUrl="/jobseeker/home": after a successful SignIn, redirect here.
          - handleShowOverlay: closes the modal when clicking outside of it. */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          onClick={handleShowOverlay}
        >
          <div>
            <SignIn
              signUpForceRedirectUrl="/jobseeker/home"
              fallbackRedirectUrl="/jobseeker/home"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
