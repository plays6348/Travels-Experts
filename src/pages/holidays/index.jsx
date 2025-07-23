import Layout from "fragments/layout/layout";
import { MdOutlineError } from "react-icons/md";
import { Link } from "react-router-dom";
import { holidays } from "utils/holidays";
import { banner1, banner2 } from "utils/media";
import { Helmet } from "react-helmet";


export function Holidays() {
  const bannerStyles = {
    backgroundImage: `url(${banner2})`,
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
    <Layout>
       

       <Helmet>
      

        <title>Luxury Holidays | Premium Holidays Deals | Travels Experts</title>
        <meta name="description" content="Discover luxury holidays, budget-friendly getaways, and the best deals for 2024/2025. Tailor your dream escape to fit your budget perfectly at Travels Experts !" />
        <meta name="keywords" content="Luxury Holidays, Best Holiday Deals, Affordable Luxury Vacations, Luxury Vacation Packages, Cheap Vacation Deals, 
        Discount Luxury Holidays, Exclusive Holiday Offers, Luxury Travel Deals, Best Luxury Holidays, Best Vacation Deals 2025" />
        <meta property="og:title" content="Luxury Holidays | Best Holidays Deals at Travels Experts" />
        <meta property="og:description" content=" Euro Holidasy - Discover luxury holidays, budget-friendly getaways, and the best deals for 2024/2025. Tailor your dream escape to fit your budget perfectly at Travels Experts !" />
        
        </Helmet>


      {/* <div style={bannerStyles} className="my-12">
        <h1 className="w-full mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
          Best Holiday Packages 🏞️
        </h1>
      </div> */}
      <div className="w-[100%] mt-[4rem]">
        <img src={banner2} alt="" />
      </div>
      <div className="bg-white">
        <div className="mx-auto px-4 py-1sm:px-6 sm:py-12 max-w-7xl lg:px-8">
          {/* Items List */}
          {holidays?.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {holidays?.map((item) => (
                <Link
                  to={`/holidays/${item?.id}`}
                  key={item.id}
                  className="group relative shadow-md flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                >
                  <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex gap-2 items-center text-gray-500">
                      <p className="text-base font-medium text-gray-900">
                        £{item.price}
                      </p>
                      <p className="flex gap-2 items-center text-gray-500">
                        per night
                      </p>
                      •<p className="text-sm">{item.place}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center mt-32 mb-12 flex flex-col items-center w-full opacity-60">
              <MdOutlineError style={{ fontSize: "3rem", opacity: "0.4" }} />
              No Listing Found.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
