import React from "react";
import { motion } from "framer-motion";

const Login = ({ isClose, onSignUp, userType }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-lg w-96 p-6 relative z-50"
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
          onClick={isClose}
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Login
        </h1>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {userType !== "admin" && (
            <p className="mt-4 text-center text-gray-700">
              Do not have an account? Please{" "}
              <span
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={() => onSignUp(userType)}
              >
                Sign Up
              </span>
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        <button
          className="mt-4 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          onClick={isClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
