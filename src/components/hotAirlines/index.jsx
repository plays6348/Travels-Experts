import { Link } from "react-router-dom";
import { airlines } from "utils/data";

export function HotAirlines() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Top <span className="text-primary font-bold"> Airlines</span>
            </h2>
            <Link
              to="/airlines"
              className="whitespace-nowrap text-sm font-medium text-primary">
              View all
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          <div className="-mx-px my-12 grid grid-cols-2 content-center justify-center align-middle h-full border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {airlines?.slice(0, 8)?.map((product) => (
              <Link
                to={`/airlines/${product?.name}`}
                key={product?.airlineCode}
                className="group relative hover:shadow-xl transition-all duration-300  cursor-pointer border-b border-r border-t border-gray-200 p-4 sm:p-6">
                <div className="aspect-h-1 flex justify-center align-middle content-center aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-[150px] object-cover object-center"
                  />
                </div>
                {/* <div className="pb-4 pt-10 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    {convertString(product.name)}
                  </h3>
                </div> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
