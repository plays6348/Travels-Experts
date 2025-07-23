import { Helmet } from "react-helmet";
import { Header } from "fragments/header";
import { Footer } from "fragments/footer";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { number } from "constants";
import { HiPhone } from "react-icons/hi";
import { useState } from "react";

export default function Layout({ children, title }) {
  return (
    <>
      {/* <Helmet> */}
        {/* <title>{title} - Best Flight, Holiday Packages & Hotel Booking</title> */}
        {/* <meta name="description" content="Find the best holiday packages and flight deals with Travels Experts." /> */}
        {/* <meta name="keywords" content="Travels Experts, holiday packages, flight deals, hotel bookings, Visa Services, Travels Experts, Eu Holidays, Uk Flights" /> */}
        {/* <meta property="og:title" content="Travels Experts | Best Flight, Holiday Packages & Hotel Booking" /> */}
        {/* <meta property="og:description" content="Find the best holiday packages and flight deals with Travels Experts." /> */}
        {/* <meta property="og:description" content="Travels Experts - The best choice for flight bookings, hotel reservations, and holiday packages.  */}
        {/* // Explore top travel deals and book affordable getaways for unforgettable experiences. Plan your perfect vacation with Travels Experts now!" /> */}
       

      {/* </Helmet> */}
      <Header />
      <div className="min-h-[50vh]">{children}</div>
      <div className="fixed flex flex-col gap-2 bottom-6 left-6 z-10">
      <a href="https://wa.me/+447883411446?text=Hi%20Euro%20Holidays%20team%2C%20I%E2%80%99m%20interested%20in%20your%20travel%20packages.%20Can%20you%20please%20help%20me%20with%20more%20details%3F" target="_blank" rel="noreferrer">

          <button
            className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 transition duration-300"
            onClick={() => {
              // Handle WhatsApp button click
              console.log("WhatsApp button clicked");
            }}
          >
            <AiOutlineWhatsApp size={24} />
          </button>
        </a>
        <a href="tel:020 8145 4449">
          <button
            className="bg-primary/80 text-white p-4 rounded-full shadow-xl hover:bg-primary focus:outline-none focus:ring focus:border-primary transition duration-300"
            onClick={() => {
              // Handle WhatsApp button click
              console.log("WhatsApp button clicked");
            }}
          >
            <HiPhone size={24} />
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Travels Experts",
  description: "",
  keywords: "noindex, nofollow",
};
