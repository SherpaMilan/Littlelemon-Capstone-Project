const HeroSection = () => {
  return (
    <div className="bg-white">
      <div
        className="relative isolate px-6 pt-14 lg:px-8"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/food.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9, // Adjust the opacity value as needed
        }}
      >
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="container">
              <div
                style={{
                  marginLeft: "130px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "1rem", // Add padding for better readability
                }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-yellow-950 sm:text-6xl">
                  Explore Little Lemon – where each bite is a delight.
                </h1>
                <h2 className=" text-1xl mt-10 font-light tracking-tight text-black-900 sm:text-2xl">
                  Immerse yourself in a refined dining experience where each
                  plate is a symphony of freshness, quality, and a subtle hint
                  of citrusy happiness, beautifully orchestrated to delight your
                  senses.
                </h2>
              </div>
            </div>

            <div className="mt-10 ml-4 flex items-center justify-center gap-x-6">
              <button
                href="#"
                className="rounded-md bg-red-800  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reserve a Table
              </button>
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
