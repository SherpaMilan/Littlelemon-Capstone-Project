export default function Confirmation() {
  return (
    <>
      <form className="p-8 rounded text-white-900 shadow-md w-90">
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
        {/* <!-- Container for form elements --> */}
        <div className="space-y-12">
          {/* <!-- Section 1: Booking Information --> */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base flex text-xl font-semibold leading-7 text-white-900">
              Book a Table
            </h2>
            <p className="mt-1 text-m flex text-base leading-6 text-gray-600">
              We appreciate your punctuality and look forward to serving you!
            </p>
          </div>
          {/* <!-- Section 2: Personal Information --> */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base text-xl font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-m flex text-base leading-6 text-gray-600">
              Use a personal email address where you can receive booking
              confirmation.
            </p>

            {/* <!-- Grid for input fields --> */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
              <div className="sm:col-span-1">
                {/* <!-- First Name Input --> */}
                <label
                  htmlFor="first-name"
                  className="block text-sm flex justify-start font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                {/* <!-- Last Name Input --> */}
                <label
                  htmlFor="last-name"
                  className="block flex justify-start text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Email and Phone Number Inputs --> */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email-address"
                className="block flex justify-start text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="given-name"
                  className="block w-half rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm flex justify-start font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="family-name"
                  className="block w-half rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <!-- Section 3: Notifications --> */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Subscribe
                      </label>
                      <p className="text-gray-500">
                        Stay updated on upcoming events and special evenings at
                        our restaurant
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              {/* <!-- Form Submission Buttons --> */}
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
