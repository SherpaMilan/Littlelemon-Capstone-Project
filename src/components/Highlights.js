const products = [
  {
    id: 1,
    name: " Strawberry Cake",
    href: "#",
    imageSrc:
      " https://images.unsplash.com/photo-1551198297-e490636298ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA4fHxkZXNzZXJ0fGVufDB8MHw0fHx8Mg%3D%3D",
    imageAlt: "",
    price: "$20",
  },
  {
    id: 2,
    name: "Bread & Peonies",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1562270910-b11f1965ad3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    imageAlt: "",
    price: "$15",
  },
  {
    id: 3,
    name: "Feast of fruits",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1678572823447-45fc146df43c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxtZWF0fGVufDB8MHw0fHx8Mg%3D%3D",
    imageAlt: " ",
    price: "$50",
  },
  {
    id: 4,
    name: " Red cocktail with sugar rim and rock candy stick",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1575650772417-e6b418b0d106?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "",
    price: "$30",
  },
];
export default function Highlights() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl flex justify-center font-bold tracking-tight text-gray-900">
          Our Specials
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
