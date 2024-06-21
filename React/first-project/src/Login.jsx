import React from "react";
import { Link } from "react-router-dom";
import {useFormik } from 'formik';
import { loginSchema } from "./Utility/validationSchema";

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email : "",
            password : ""
        },
        validationSchema : loginSchema,
        onSubmit: (values , action)=>{
            console.log(values )
            action.resetForm()
        }
    })
    console.log(formik.errors)
  return (
    <div className="w-full h-full ">
      <div className="w-1/4 h-[50vh]  mx-auto my-24 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-around mx-auto">
            <p className="text-3xl text-white "> One Stop </p>
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>

          <form onSubmit={formik.handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-4 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Email Address"
                aria-label="Email Address"
                name = 'email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
             {formik.touched.email && formik.errors.email ? <p className="text-red-600 "> {formik.errors.email } </p> : null}
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-4 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name = "password"
                value = {formik.values.password}    
                onChange = {formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ?  <p className="text-red-600 "> {formik.errors.password } </p>:null}
            </div>

            <div className="flex items-center justify-center my-20">
              <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?
          </span>

          <Link
            to="/signup"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
