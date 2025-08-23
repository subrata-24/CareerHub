import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { ValidateUsers } from "./ValidateUsers";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const RoleSelection = () => {
  const { user, isLoaded } = useUser();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      education: "",
      skills: "",
      experience: "",
      role: "",
    },
    validationSchema: ValidateUsers,
    onSubmit: async (values) => {
      if (!user) return;

      await user
        .update({
          unsafeMetadata: { role: values.role },
        })
        .then(() => {
          navigate(
            values.role === "jobseeker" ? "/jobseeker/home" : "/employee/home"
          );
        })
        .catch((err) => {
          console.error("Error updating role", err);
        });
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
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
          Job Seeker Information
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
            <label htmlFor="role" className="block text-sm text-gray-600">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">Select a role</option>
              <option value="jobseeker">Jobseeker</option>
              <option value="employee">Employee</option>
            </select>

            {formik.touched.role && formik.errors.role && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.role}</p>
            )}
          </div>

          <button type="submit" className="cursor-pointer">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default RoleSelection;
