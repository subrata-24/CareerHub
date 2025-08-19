import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { ValidateSeeker } from "../components/ValidateSeeker";

const JobSeekerSignUP = ({ isClose }) => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      education: "",
      skills: "",
      experience: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: ValidateSeeker,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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

        <form onSubmit={formik.handleSubmit} className="space-y-3">
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
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="First name"
                className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.firstname}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lastname" className="block text-sm text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="education" className="block text-sm text-gray-600">
              Education
            </label>
            <input
              type="text"
              id="education"
              value={formik.values.education}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.skills}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.experience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.confirmPassword}
                </p>
              )}
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
