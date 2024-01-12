export default function Testimonials() {
  return (
    <div className="flex flex-col lg:flex-row border border-blue-500 p-4">
      <section className="flex-1 relative border-r isolate overflow-hidden bg-white px-6 py-24 sm:py-1 lg:px-8 mt-[-10px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-light leading-8 text-gray-900 sm:text-m sm:leading-9">
              <p>
                "Little Lemon Restaurant is an absolute sensation! From the
                moment I walked in, the air was filled with the enchanting aroma
                of culinary wonders. Each dish is a symphony of flavors, a dance
                on the taste buds that leaves you craving more. The trendy
                ambiance and the staff's impeccable service elevate the dining
                experience to a whole new level. Little Lemon is my culinary
                haven!"
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmUlMjBjaXJjbGV8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Samantha</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">
                  Food Explorer Extraordinaire
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="flex-1 relative isolate overflow-hidden bg-white px-6 py-24 sm:py-1 lg:px-8 mt-[-10px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-light  leading-8 text-gray-900 sm:text-m sm:leading-9">
              <p>
                "Little Lemon has become my sanctuary for culinary bliss! It's
                not just a restaurant; it's a gastronomic journey. The menu, a
                masterpiece of culinary art, boasts a delightful fusion of
                timeless classics and innovative creations. The staff's warm
                welcome and attentive service make every visit a memorable
                occasion. For an extraordinary dining adventure, Little Lemon is
                the epitome of perfection!"
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1691085465046-807f880ba9d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2VhbnUlMjByZWV2ZXN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">John</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600"> Connoisseur of Delight</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
