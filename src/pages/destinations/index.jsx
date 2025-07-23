import { Container } from "components/container";
import Loader from "components/loader";
import Searchbar from "components/searchEngine";
import { db } from "config/firebase";
import { transitionAll } from "constants";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Layout from "fragments/layout/layout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { convertString } from "utils";
import { banner1 } from "utils/media";
import { Helmet } from "react-helmet";

export function Destinations() {
  const [destinations, setDestinations] = useState([]);

  const getAllDestinations = async () => {
    const arrOfData = [];
    const q = query(collection(db, "destinations"), orderBy("sortOrder"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), id: doc.id });
    });

    setDestinations(arrOfData);
  };

  console.log(destinations);

  useEffect(() => {
    getAllDestinations();
  }, []);

  const bannerStyles = {
    backgroundImage: `url(${banner1})`,
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
    <>
        <Helmet>

         <title>Best Destinations In Europe | Euro Holidays Dream Destinations </title>
        <meta name="description" content="Discover your Dream  destinations with Euro Holidays ! Enjoy exclusive flight and holiday packages, tailored to create unforgettable experiences just for you" />
        <meta name="keywords" content="Travel Destination, Destination With Euro Holidays, European adventure, Best Destination in Europe, Vication Destination, Luxry Destination, Wedding Destination " />
        <meta property="og:title" content="Euro Holidays | Best Destinations In Europe | Euro Holidays Dream Destinations " />
        <meta property="og:description" content="Find the best Dream Destinations and Flights with Euro Holidays." />
        <meta property="og:description" content="Discover your dream destinations with our guide to the best destinations in Europe. Explore top travel spots, from iconic cities to hidden gems. Euro holidays!" />
       

        </Helmet>
      <Layout>
        {/* <div style={bannerStyles}>
          <h1 className="w-full mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
            Trending Destinations 🏞️
          </h1>
        </div> */}
        <div className="w-[100%] mt-[4rem]">
          <img src={banner1} alt="" />
        </div>
        <Container>
          <div className="my-16 mx-4">
            {/* <h1 className="w-full mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
              Trending{" "}
              <span className="text-primary font-bold"> Destinations</span>
            </h1> */}
            <div className=" flex justify-center">
              <Searchbar />
            </div>
            {destinations?.length > 0 ? (
              <div className="my-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {destinations?.map((product) => (
                  <Link to={`/destinations/${product?.name}`} key={product.id}>
                    <div className={`${transitionAll} cursor-pointer`}>
                      <div className="h-72 w-full overflow-hidden rounded-lg">
                        <img
                          src={product.img}
                          alt={product.imageAlt}
                          className={`h-full w-full hover:scale-110 ${transitionAll} object-cover object-center`}
                        />
                      </div>
                      <div className="relative mt-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {convertString(product?.name)}
                        </h3>
                      </div>
                    </div>
                    {/* <div className="mt-6">
                    <a
                      href={product.href}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
                      Add to bag
                      <span className="sr-only">, {product.name}</span>
                    </a>
                  </div> */}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="my-24">
                <Loader />
              </div>
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
}
