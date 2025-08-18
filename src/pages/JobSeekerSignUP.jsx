import React from "react";
import { motion } from "framer-motion";

const JobSeekerSignUP = ({ isClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white rounded-2xl shadow-2xl w-[28rem] p-8 relative"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition text-2xl"
          onClick={isClose}
        >
          ✕
        </button>

        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
          Job Seeker Sign Up
        </h1>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstname"
                className="block text-gray-700 font-medium mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="Enter your firstname"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-gray-700 font-medium mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

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
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="education"
              className="block text-gray-700 font-medium mb-1"
            >
              Education
            </label>
            <input
              type="text"
              id="education"
              placeholder="Enter your education"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="skills"
              className="block text-gray-700 font-medium mb-1"
            >
              Skills
            </label>
            <input
              type="text"
              id="skills"
              placeholder="Enter your skills"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block text-gray-700 font-medium mb-1"
            >
              Experience
            </label>
            <input
              type="text"
              id="experience"
              placeholder="Enter your experience"
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
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
            onClick={isClose}
          >
            Login here
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default JobSeekerSignUP;
