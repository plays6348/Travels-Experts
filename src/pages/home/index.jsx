import Layout from "fragments/layout/layout";
import { Hero } from "./components/hero";
import Searchbar from "components/searchEngine";
import { Container } from "components/container";
import { Incentives } from "./components/incentives";
import { HotDestinations } from "components/hotDestinations";
import { HotAirlines } from "components/hotAirlines";
import { Newsletter } from "components/newsletter";
import { Helmet } from "react-helmet";
import CruiseDestinations from 'components/CruiseDestinations';
import{TawkToChat} from 'utils/chattawk';
export default function Home() {
  return (
        

    <Layout>
      <Helmet>
        <title> Travels Experts - Best Flight, Holiday Packages & Hotel Booking</title>
        <meta name="description" content="Travels Experts - The best choice for flight bookings, hotel reservations, and holiday packages.
        Explore top travel deals and book affordable getaways for unforgettable experiences." />
        <meta name="keywords" content="Travels Experts, Travels Experts Flight Deals, Luxury Travel, Business Class Flight, Luxury Travel Agency, Economy Flight, Hotel Bookings, Travels Experts, Uk Flights" />
        <meta property="og:title" content="Travels Experts | Best Flight, Holiday Packages & Hotel Booking" />
        <meta property="og:description" content="Find the best holiday packages and flight deals with Travels Experts." />
        <meta property="og:description" content="Travels Experts - The best choice for flight bookings, hotel reservations, and holiday packages. 
        Explore top travel deals and book affordable getaways for unforgettable experiences. Plan your perfect vacation with Travels Experts now!" />
        <link rel="canonical" href="https://www.travelsexperts.co.uk/" />

        
        
        </Helmet>
      <div className="w-full flex justify-center bg-wite">
        <div className="flex flex-col gap-14 w-full">
          <Hero />
          <Container className="text-center my-12">
            <h1 className="w-full mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
              Search Your Next
              <span className="text-primary font-bold"> Destination</span>
            </h1>
          <Searchbar />
          </Container>
          <HotDestinations />
          <CruiseDestinations/>
          <Incentives />
          {/* <HotAirlines /> */}
          
          <Newsletter />

          

          
          
        </div>
        
      </div>
    </Layout>
  );
}
