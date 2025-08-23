// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignIn } from "@clerk/clerk-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setShowSignIn(false);
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
          <SignedOut>
            <button
              className="border border-black px-2 py-1"
              onClick={() => setShowSignIn(true)}
            >
              jobseeker
            </button>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>

      {/* Modal overlay */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div>
            <SignIn
              forceRedirectUrl="/jobseeker/home"
              signUpForceRedirectUrl="/role"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
