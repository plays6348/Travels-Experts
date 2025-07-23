import Layout from "fragments/layout/layout";
import { Link } from "react-router-dom";
import { convertString } from "utils";
import { banner1, visaBanner } from "utils/media";
import { otherVisaCountries, visaCounties } from "utils/visaCountries";

export function VisaCountries() {
  return (
    <Layout title="Visa Services">
      <div className="bg-white mt-16">
        {/* <div className="h-[320px] flex items-center justify-center overflow-hidden">
          <img
            class="object-cover h-full w-full"
            src={banner1}
            // src="https://www.traveltrolley.co.uk/travel-infographics/Images/britons-cheader.jpg"
            alt=""
          />
        </div> */}
        <div className="w-[100%] mt-[4rem]">
          <img src={banner1} alt="" />
        </div>
        <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
          <h1 className="w-full my-16 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
            Apply for Schengen
            <span className="text-primary font-bold"> Visa Services</span>
          </h1>
          <div className="-mx-px grid grid-cols-2 content-center justify-center align-middle h-full border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {visaCounties?.map((product) => (
              <Link
                to={`/visa-services/${product?.name}`}
                key={product?.airlineCode}
                className="group flex flex-col justify-between relative hover:shadow-xl transition-all duration-300  cursor-pointer border-b border-r border-t border-gray-200 p-4 sm:p-6"
              >
                <div className="aspect-h-1 flex justify-center align-middle content-center aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-[150px] object-cover object-center"
                  />
                </div>
                <div className="pb-4 pt-10 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    {convertString(product.name)}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Countries */}
        <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
          <h1 className="w-full my-24 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
            Apply for Visa Services for
            <span className="text-primary font-bold"> other countries</span>
          </h1>
          <div className="-mx-px grid grid-cols-2 content-center justify-center align-middle h-full border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {otherVisaCountries?.map((product) => (
              <Link
                to={`/visa-services/${product?.name}`}
                key={product?.airlineCode}
                className="group flex flex-col justify-between relative hover:shadow-xl transition-all duration-300  cursor-pointer border-b border-r border-t border-gray-200 p-4 sm:p-6"
              >
                <div className="aspect-h-1 flex justify-center align-middle content-center aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-[150px] object-cover object-center"
                  />
                </div>
                <div className="pb-4 pt-10 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    {convertString(product.name)}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
