import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { database } from "../firebase/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import { FaCheckCircle } from "react-icons/fa";

function Booking() {
  // state management for form submission alert
  const [showAlert, setShowAlert] = useState(false);
  // Function to show alert
  const showSuccessAlert = () => {
    setShowAlert(true);
    // Scroll the screen up to show the alert
    window.scrollTo(0, 0);

    // Hide the alert after 5 seconds (5000 milliseconds)
    setTimeout(() => setShowAlert(false), 5000);
  };

  // State Management with React Hooks
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    setting: "indoor",
    date: "",
    time: "12:00 PM",
    visitors: "",
    occasion: "birthday",
    specialRequest: "",
  });
  // Form Validation State
  const [errors, setErrors] = useState({});

  // Universal Phone Number Validation Function
  const isValidPhoneNumber = (phoneNumber) => {
    // Define your regular expression for phone numbers
    const phoneRegex = /^[0-9]{10}$/;

    // Test if the phone number matches the pattern
    return phoneRegex.test(phoneNumber);
  };

  // Form Validation Function
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate each field
    if (formValues.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (formValues.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (formValues.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Phone Number
    if (formValues.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!isValidPhoneNumber(formValues.phoneNumber.trim())) {
      newErrors.phoneNumber = "Invalid Phone Number";
      isValid = false;
    }
    // Validate Date
    const selectedDate = new Date(formValues.date);
    const currentDate = new Date();

    if (formValues.date.trim() === "") {
      newErrors.date = "Date is required";
      isValid = false;
    } else if (selectedDate < currentDate) {
      newErrors.date = "Please select a future date";
      isValid = false;
    }

    if (formValues.visitors.trim() === "" || formValues.visitors <= 0) {
      newErrors.visitors = "Number of Visitors must be greater than 0";
      isValid = false;
    }

    // Add more validations for other fields as needed

    setErrors(newErrors);
    return isValid;
  };

  // Form Submission Function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      try {
        // Add a new document to the "reservations" collection
        const docRef = await addDoc(collection(database, "reservations"), {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          phoneNumber: formValues.phoneNumber,
          setting: formValues.setting,
          date: formValues.date,
          time: formValues.time,
          visitors: formValues.visitors,
          occasion: formValues.occasion,
          specialRequest: formValues.specialRequest,
        });

        console.log("Document written with ID submitted:", docRef.id);
        showSuccessAlert();

        // Clear the form by resetting the form values in the state
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          setting: "indoor",
          date: "",
          time: "12:00 PM",
          visitors: "",
          occasion: "birthday",
          specialRequest: " ",
        });

        // You can also reset the errors state if needed
        setErrors({});
      } catch (error) {
        console.error("Error adding document:", error);
      }
    } else {
      console.log("Form has validation errors. Please correct them.");
    }
  };

  // Input Field Change Handler
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* bg color design  */}
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
        {/* bg color design  */}

        {/* Section 1: Booking Information */}
        <div className="border-b mb-4 flex justify-center border-gray-900/10 mt-[-6rem] ">
          <p className=" text-m ml-5 text-base leading-6 text-gray-600">
            We appreciate your punctuality and look forward to serving you!
          </p>
        </div>
        <div className="w-full max-w-screen-lg mx-auto mt-16 flex flex-col items-center space-y-8">
          {/* Form */}
          <form
            className="flex flex-col items-center mb-8 md:flex-row md:items-start w-full max-w-screen-md"
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* Left Section */}
            <div className="flex-1  mx-2 md:mx-6 mt-6 md:mt-0 md:flex-col md:items-center">
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
                    value={formValues.firstName}
                    onChange={handleChange}
                    className={`mt-1 p-2 border rounded-md w-30 ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
              </div>
              {/* last name  */}

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
                  value={formValues.lastName}
                  onChange={handleChange}
                  className={`mt-1 p-2 border rounded-md w-30 ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
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
                  value={formValues.email}
                  onChange={handleChange}
                  className={`mt-1 p-2 border rounded-md w-30 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
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
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  className={`mt-1 p-2 border rounded-md w-30 ${
                    errors.phoneNumber ? "border-red-500" : ""
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>
            {/* Right Section */}
            <div className="flex-1 ml-20 mx-2 md:mx-6 mt-6 md:mt-0 md:flex-col md:items-center">
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
                  value={formValues.setting}
                  onChange={handleChange}
                  className={`mt-1 p-2 border rounded-md w-40 ${
                    errors.setting ? "border-red-500" : ""
                  }`}
                >
                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="roof">Roof Top</option>
                </select>
                {errors.setting && (
                  <p className="text-red-500 text-xs mt-1">{errors.setting}</p>
                )}
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
                    value={formValues.date}
                    onChange={handleChange}
                    className={`mt-1 p-2 border rounded-md w-40 ${
                      errors.date ? "border-red-500" : ""
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                  )}
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
                    value={formValues.time}
                    onChange={handleChange}
                    className={`mt-1 p-2 border rounded-md w-40 ${
                      errors.time ? "border-red-500" : ""
                    }`}
                  >
                    {/* Options... */}
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="14:00 PM">2:00 PM</option>
                    <option value="15:00 PM">3:00 PM</option>
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                  )}
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
                    value={formValues.visitors}
                    onChange={handleChange}
                    className={`mt-1 p-2 border rounded-md w-40 ${
                      errors.visitors ? "border-red-500" : ""
                    }`}
                  />
                  {errors.visitors && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.visitors}
                    </p>
                  )}
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
                    value={formValues.occasion}
                    onChange={handleChange}
                    className={`mt-1 p-2 border rounded-md w-40 ${
                      errors.occasion ? "border-red-500" : ""
                    }`}
                  >
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="everyday">Everyday Meal</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.occasion && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.occasion}
                    </p>
                  )}
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
                  value={formValues.specialRequest}
                  onChange={handleChange}
                  className={`mt-1 p-2 border rounded-md w-full md:w-2/3 ${
                    errors.specialRequest ? "border-red-500" : ""
                  }`}
                ></textarea>
                {errors.specialRequest && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.specialRequest}
                  </p>
                )}
              </div>
              {/* Notification Section */}
              <div className="flex-1 ">
                <div className="mt-2 mb-2 gap-x-6">
                  <div className="mt-2  space-y-10">
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
                              Stay updated on special evenings.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                {/* Form Submission Buttons */}
                <div className="mt-5 flex items-center justify-center gap-x-6">
                  <Link
                    to="/home"
                    className="flex flex-col items-center md:flex-row md:items-start block px-4 py-2 text-sm text-gray-700"
                  >
                    Cancel
                  </Link>

                  <button
                    type="submit"
                    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* alert  display message  */}
            {showAlert && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:scale-105 flex items-center">
                <FaCheckCircle className="text-green-400 text-3xl mr-2" />
                <span className="text-lg font-semibold">
                  Reservation submitted successfully!
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Booking;
