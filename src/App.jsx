import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "utils/scrollToTop";
import { ThemeProvider } from "@mui/material";

// pages
import NotFound from "pages/404";
import Home from "pages/home";
import { theme } from "utils/theme";
import { Contact } from "pages/contactus";
import { Airlines } from "pages/airlines";
import { Fares } from "pages/fares";
import { Flights } from "pages/flights";
import { VisaCountries } from "pages/visaCountries";
import { VisaInquiry } from "pages/visaCountries/visaInquiry";
import { Destinations } from "pages/destinations";
import { SingleDestination } from "pages/destinations/singleDestination";
import { SingleAirline } from "pages/airlines/singleAirline";
import BookNow from "pages/book";
import { Holidays } from "pages/holidays";
import { HolidayDetails } from "pages/holidays/holidayDetails";
import { BookingConditions } from "pages/others/bookingConditions";
import { TermsConditions } from "pages/others/termsConditions";
import TawkToChat from './utils/chattawk';
 
export default function App() {
  return (
    <>
    
      <ThemeProvider theme={theme}>
      <div>
      <TawkToChat />
      {/* Your main app components */}
    </div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/flights" element={<Flights />} />

          <Route path="/fares" element={<Fares />} />
          <Route path="/book/:id" element={<BookNow />} />

          <Route path="/airlines" element={<Airlines />} />
          <Route path="/airlines/:id" element={<SingleAirline />} />

          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<SingleDestination />} />

          <Route path="/visa-services" element={<VisaCountries />} />
          <Route path="/visa-services/:country" element={<VisaInquiry />} />

          <Route path="/holidays" element={<Holidays />} />
          <Route path="/holidays/:id" element={<HolidayDetails />} />

          <Route path="/booking-conditions" element={<BookingConditions />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer hideProgressBar="true" />
      </ThemeProvider>
    </>
  );
}
