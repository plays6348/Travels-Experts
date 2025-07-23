import { Container } from "components/container";
import Searchbar from "components/searchEngine";
import Layout from "fragments/layout/layout";
import { Link } from "react-router-dom";
import { airlines } from "utils/data";
import { banner3 } from "utils/media";
import { Helmet } from "react-helmet";
export function Airlines() {
  const bannerStyles = {
    backgroundImage: `url(${banner3})`,
    // backgroundImage: `url(https://www.selgec.net/wp-content/uploads/2016/06/Advice-That-Will-Help-You-With-Your-Travels.jpg)`,
    marginTop: "4rem",
    width: "100%",
    height: "20rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textShadow: "2px 2px 21px grey",
  };

  return (
    <Layout>|

      <Helmet>

      

        <title>Affordable Airline Packages | Euro Holidays' Best Deals on Cheap Flights</title>
        <meta name="description" content="Book your dream vacation at unbeatable prices with our airline package deals! Enjoy bundled flights, hotels, and more for a seamless travel experience. #travelagency #AirlinePackagesDeal" />
        <meta name="keywords" content="Airline Packages Deals, Cheap Airline Packages Deals, Best Airlines Packages Deals, Top Airline Packages Deals, 
        International Airlines Packages Deals, Euro Holidays " />
        <meta property="og:title" content="Euro Holidays  Airline Packages | Euro Holidays' Best Deals on Cheap Flights" />
        <meta property="og:description" content=" Book your dream vacation at unbeatable prices with our airline package deals! Euro Holidays Enjoy bundled flights, hotels, and more for a seamless travel experience. #travelagency #AirlinePackagesDeal" />
        
        


      </Helmet>
      {/* <div style={bannerStyles}>
        <h1 className="w-full mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
          Choose Your Next Travel Partner ✈️
        </h1>
      </div> */}
      <div className="w-[100%] mt-[4rem]">
        <img src={banner3} alt="" />
      </div>
      <div className="bg-white my-8">
        <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
          <Container className="text-center my-12">
            <h1 className="w-full mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
              Search Your Next
              <span className="text-primary font-bold"> Destination</span>
            </h1>
            <Searchbar />
          </Container>
          {/* <h1 className="w-full my-16 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
            Top
            <span className="text-primary font-bold"> Airlines</span>
          </h1> */}
          {/* <div className="-mx-px grid grid-cols-2 content-center justify-center align-middle h-full border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {airlines?.map((product) => (
              <Link
                to={`/airlines/${product?.name}`}
                key={product?.airlineCode}
                className="group relative hover:shadow-xl transition-all duration-300  cursor-pointer border-b border-r border-t border-gray-200 p-4 sm:p-6"
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
          </div> */}
        </div>
      </div>
    </Layout>
  );
}
