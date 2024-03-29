import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function SignUp() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div
        className="relative  isolate px-6 mt-[-6rem]  pt-8 lg:px-6"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/food.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9, // Adjust the opacity value as needed
        }}
      >
        <div className=" px-6 pt-14 lg:px-8 flex flex-col justify-center items-center  mb-5 p-8 mx-auto ">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

          {/* Sign Up Form */}
          <form action="#" method="POST">
            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="fName"
                name="fName"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lName"
                name="lName"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* Re-enter Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Re-enter Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* Subscribe to Promotion Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <label
                htmlFor="subscribe"
                className="ml-2 block text-sm text-gray-600"
              >
                Subscribe to promotions
              </label>
            </div>
            <div className="mt-2 flex items-center justify-center gap-x-6">
              <Link
                to="/home"
                className="flex flex-col items-center md:flex-row md:items-start block px-4 py-2 text-sm text-gray-700"
              >
                Cancel
              </Link>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="bg-blue-800 text-white p-2 rounded-md w-full"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
