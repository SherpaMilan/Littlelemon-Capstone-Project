import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Booking() {
  return (
    <>
      {/* Section 1: Booking Information */}
      <div className="border-b flex justify-center border-gray-900/10 pb-6 md:pb-8">
        <p className="mt-5 text-m ml-5 text-base leading-6 text-gray-600">
          We appreciate your punctuality and look forward to serving you!
        </p>
      </div>
      <div className="w-full max-w-screen-lg mx-auto">
        {/* Form */}
        <form className="flex flex-col items-center mb-8 md:flex-row md:items-start">
          <img
            className=" w-72 h-85 mt-2  object-cover"
            src="/images/reserved.jpg"
            alt="Reserved"
          />

          {/* Left Section */}
          <div className="flex-1 md:w-1/2 mx-2 md:mx-6 mt-6 md:mt-0">
            <h2 className="text-base text-xl font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>

            <div className="mb-4 flex flex-col md:flex-row">
              {/* first name  */}
              <div className="mb-4 mt-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 border rounded-md w-30"
                />
              </div>
            </div>
            {/* last name  */}

            {/* <div className="md:w-1/2 pl-2"> */}
            <div className="mb-4 mt-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 border rounded-md w-30"
              />
            </div>

            {/* Email */}
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
                className="mt-1 p-2 border rounded-md w-30"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 border rounded-md w-30"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 md:w-1/2 mx-2  md:mx-5 mt-6 md:mt-0">
            <h2 className="text-base text-xl font-semibold leading-7 text-gray-900">
              Reservation Details
            </h2>

            {/* Setting */}
            <div className="mb-4 mt-3">
              <label
                htmlFor="setting"
                className="block text-sm font-medium text-gray-600"
              >
                Setting
              </label>
              <select
                id="setting"
                name="setting"
                className="mt-1 p-2 border rounded-md w-40"
              >
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
                <option value="roof">Roof Top</option>
              </select>
            </div>

            {/* Date */}
            <div className="mb-4 flex flex-col md:flex-row">
              <div className="mb-4 mt-3 mr-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-600"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-1 p-2 border rounded-md w-40"
                />
              </div>
              <div className="mb-4 mt-3 ">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-600"
                >
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  className="mt-1 p-2 border rounded-md w-40"
                >
                  {/* Options... */}
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="14:00 PM">2:00 PM</option>
                  <option value="15:00 PM">3:00 PM</option>
                </select>
              </div>
            </div>

            {/* Number of Visitors */}
            <div className="mb-4 flex flex-col md:flex-row">
              <div className="mb-4  mr-2 mt-2">
                <label
                  htmlFor="visitors"
                  className="block text-sm font-medium text-gray-600"
                >
                  Number of Visitors
                </label>
                <input
                  type="number"
                  id="visitors"
                  name="visitors"
                  className="mt-1 p-2 border rounded-md w-40"
                />
              </div>

              <div className="mb-4 mt-2">
                <label
                  htmlFor="occasion"
                  className="block text-sm font-medium text-gray-600"
                >
                  Occasion
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  className="mt-1 p-2 border rounded-md w-40"
                >
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="everyday">Everyday Meal</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div className="mb-4">
              <label
                htmlFor="specialRequest"
                className="block text-sm font-medium text-gray-600"
              >
                Special Request
              </label>
              <textarea
                id="specialRequest"
                name="specialRequest"
                rows="2"
                className="mt-1 p-2 border rounded-md w-full md:w-2/3"
              ></textarea>
            </div>
          </div>

          {/* Background Color */}

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
          {/* bg color ends  */}
        </form>
      </div>

      {/* Notification Section */}
      <div className="mt-2 mb-2 flex items-center justify-center gap-x-6">
        <div className="mt-2 ml-10 space-y-10">
          <fieldset>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-800 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-l leading-6">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-900"
                  >
                    Subscribe
                  </label>
                  <p className=" text-gray-500">
                    Stay updated on upcoming events and special evenings at our
                    restaurant
                  </p>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Form Submission Buttons */}
          <div className="mt-2 flex items-center justify-center gap-x-6">
            <Link
              to="/home"
              className="flex flex-col items-center md:flex-row md:items-start block px-4 py-2 text-sm text-gray-700"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Link
                to="/confirmation"
                className="flex flex-col items-center md:flex-row md:items-start block px-4 py-2 text-sm text-gray-700"
              >
                Submit
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
