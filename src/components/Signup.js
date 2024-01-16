import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function SignUp() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
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
