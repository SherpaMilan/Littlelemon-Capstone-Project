const dinner = [
  {
    name: "CRISPY PORK BELLY IN SALSA VERDE ",
    description:
      "Coffee-rubbed pork, grilled pineapple, slaw, cilantro, onions",
    price: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1657143376804-2c8ef7bfa72d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGRpbm5lcnxlbnwwfDB8NHx8fDI%3D",
  },
  {
    name: "VEGGIE TACOS ",
    description:
      "Chile-tahini, grilled kale, delicate squash, salsa mocha, avocado",
    price: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1560788843-646e13a8025e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRpc2h8ZW58MHwwfDR8fHwy",
  },
  {
    name: "SAUSAGE & VEGGIE PARRILLADA",
    description:
      "Selection of sausages, grilled veggies, arepas, queso fundido",
    price: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1626081438186-3d0f9532b6b0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRpc2h8ZW58MHwwfDR8fHwy",
  },
  {
    name: "MEXICAN FEIJOADA",
    description:
      "Two eggs cooked in black beans, spicy 'nduja sausage, pickled onions, cilantros",
    price: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1605178660491-6e05b8a286b5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpc2h8ZW58MHwwfDR8fHwy",
  },
  {
    name: "SHOESTRING SWEET POTATO FRIES",
    description: "Chipotle crema",
    price: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1560717869-37296557a131?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxkaXNofGVufDB8MHw0fHx8Mg%3D%3D",
  },
  {
    name: "LITTLE PIECE OF BRAZIL",
    description: "Yucca coconut cake topped with whipped cream and lime zest",
    price: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1576064535185-9f6e3f24b63e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxkaXNofGVufDB8MHw0fHx8Mg%3D%3D",
  },
];

export default function Menus() {
  return (
    <>
      {/* <Layout> */}
      <div className="flex flex-col items-center">
        {/* dinner section */}
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-4xl font-bold mb-4">Dinner List</h1>
          <div className="flex flex-col items-center max-h-[80vh] overflow-y-auto">
            <ul className="w-full">
              {dinner.map((item) => (
                <li
                  key={item.description}
                  className="flex flex-col sm:flex-row justify-between gap-x-6 py-5 mb-4 w-full"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={item.imageUrl}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {item.description}
                      </p>
                      <p className="text-sm leading-6 text-gray-900 mt-1 sm:hidden">
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex sm:flex-col sm:items-end sm:ml-4">
                    <p className="text-sm leading-6 text-gray-900 sm:mt-1 hidden sm:block">
                      {item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* lunch list */}
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-4xl font-bold mb-4">Lunch List</h1>
          <div className="flex flex-col items-center max-h-[80vh] overflow-y-auto">
            <ul className="w-full">
              {dinner.map((item) => (
                <li
                  key={item.description}
                  className="flex flex-col sm:flex-row justify-between gap-x-6 py-5 mb-4 w-full"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={item.imageUrl}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {item.description}
                      </p>
                      <p className="text-sm leading-6 text-gray-900 mt-1 sm:hidden">
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex sm:flex-col sm:items-end sm:ml-4">
                    <p className="text-sm leading-6 text-gray-900 sm:mt-1 hidden sm:block">
                      {item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* dessert section */}
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-4xl font-bold mb-4">Desserts List</h1>
          <div className="flex flex-col items-center max-h-[80vh] overflow-y-auto">
            <ul className="w-full">
              {dinner.map((item) => (
                <li
                  key={item.description}
                  className="flex flex-col sm:flex-row justify-between gap-x-6 py-5 mb-4 w-full"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={item.imageUrl}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {item.description}
                      </p>
                      <p className="text-sm leading-6 text-gray-900 mt-1 sm:hidden">
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex sm:flex-col sm:items-end sm:ml-4">
                    <p className="text-sm leading-6 text-gray-900 sm:mt-1 hidden sm:block">
                      {item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* drinks section */}
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-4xl font-bold mb-4">Drinks</h1>
          <div className="flex flex-col items-center max-h-[80vh] overflow-y-auto">
            <ul className="w-full">
              {dinner.map((item) => (
                <li
                  key={item.description}
                  className="flex flex-col sm:flex-row justify-between gap-x-6 py-5 mb-4 w-full"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={item.imageUrl}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {item.description}
                      </p>
                      <p className="text-sm leading-6 text-gray-900 mt-1 sm:hidden">
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex sm:flex-col sm:items-end sm:ml-4">
                    <p className="text-sm leading-6 text-gray-900 sm:mt-1 hidden sm:block">
                      {item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
}
