import React from "react";
import { motion } from "framer-motion";

const JobSeekerSignUP = ({ isClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
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
              htmlFor="firstname"
              className="block text-gray-700 font-medium mb-1"
            >
              First Name
            </label>
            <input
              type="firstname"
              id="firstname"
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <label
              htmlFor="lastname"
              className="block text-gray-700 font-medium mb-1"
            >
              Last Name
            </label>
            <input
              type="lastname"
              id="lastname"
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

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

          <label
            htmlFor="education"
            className="block text-gray-700 font-medium mb-1"
          >
            Education
          </label>
          <input
            type="education"
            id="education"
            placeholder="Enter your education"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <label
            htmlFor="skills"
            className="block text-gray-700 font-medium mb-1"
          >
            Skills
          </label>
          <input
            type="skills"
            id="skills"
            placeholder="Enter your skills"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <label
            htmlFor="experience"
            className="block text-gray-700 font-medium mb-1"
          >
            Experience
          </label>
          <input
            type="experience"
            id="experience"
            placeholder="Enter your experience"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

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

export default JobSeekerSignUP;
