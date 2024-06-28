import React, { useContext } from "react";
import { Theme } from "./Utility/ThemeContext.jsx";
import { useFormik } from "formik";
import { signupSchema } from "./Utility/validationSchema.js";

const Signup = () => {
  let { theme } = useContext(Theme);

  let lightTheme = "flex items-center justify-center min-h-[92vh] bg-white";
  let darkTheme = "flex items-center justify-center min-h-[92vh]";

  let signIn = async (values) => {
    console.log(values);
    let res = await fetch("http://localhost:5143/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    let data = await res.json();
    console.log(data);
  };

  let formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values, action) => {
      await signIn(values);
      action.resetForm();
    },
  });

  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="bg-gray-700 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create an Account
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.userName && formik.touched.userName ? (
              <p className="text-red-500 text-sm mt-2 " id="usernameError">
                {formik.errors.userName}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-500 text-sm mt-2 " id="emailError">
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              autoComplete="false"
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-500 text-sm mt-2 " id="passwordError">
                {formik.errors.password}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              autoComplete="false"
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <p className="text-red-500 text-sm mt-2 " id="confirmPasswordError">
                {formik.errors.confirmPassword}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account?
          <a href="#" className="text-indigo-500 font-semibold">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;