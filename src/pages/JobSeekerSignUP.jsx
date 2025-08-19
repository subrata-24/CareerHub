import React from "react";
import { motion } from "framer-motion";

const JobSeekerSignUP = ({ isClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="bg-white rounded-xl shadow-lg w-[24rem] p-6 relative max-h-[90vh] overflow-y-auto"
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition text-xl"
          onClick={isClose}
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
          Job Seeker Sign Up
        </h1>

        <form className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="First name"
                className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Last name"
                className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="education" className="block text-sm text-gray-600">
              Education
            </label>
            <input
              type="text"
              id="education"
              placeholder="Your education"
              className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm text-gray-600">
              Skills
            </label>
            <input
              type="text"
              id="skills"
              placeholder="Your skills"
              className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm text-gray-600">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              placeholder="Your experience"
              className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">
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
