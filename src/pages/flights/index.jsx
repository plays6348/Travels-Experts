import { LoadingButton } from "@mui/lab";
import { Container } from "components/container";
import FareCard from "components/fareCard";
import { InquiryForm } from "components/inquiryForm";
import Loader from "components/loader";
import Searchbar from "components/searchEngine";
import { db } from "config/firebase";
import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
} from "firebase/firestore";
import Layout from "fragments/layout/layout";
import { useEffect, useState } from "react";
import { convertString } from "utils";
import { banner2 } from "utils/media";
import { Helmet } from "react-helmet";

export function Flights() {
  const [fares, setFares] = useState([]);
  const [skip, setSkip] = useState(5);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const getAllFares = async () => {
    if (!blockApi) {
      setFetching(true);
      if (fares.length == 0) {
        const arrOfData = [];
        const q = query(collection(db, "fares"), limit(9));
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        if (arrOfData.length < 9) {
          setBlockApi(true);
        }
        if (arrOfData.length === 0) {
          setIsEmpty(true);
        }
        setFares(arrOfData);
        console.log("if");
      } else if (fares.length > 0) {
        const arrOfData = [];
        // let lastVisible = fares[fares.length - 1];
        // console.log("last", lastVisible);
        const q = query(
          collection(db, "fares"),
          startAfter(lastDocu),
          limit(9)
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setFares([...fares, ...arrOfData]);
        // console.log(arrOfData);
        // console.log("else");
        if (arrOfData.length < 9) {
          setBlockApi(true);
        }
        if (arrOfData.length === 0) {
          setIsEmpty(true);
        }
      }
      setFetching(false);
    }
  };

  useEffect(() => {
    getAllFares();
  }, []);

  useEffect(() => {
    getAllFares();
  }, [skip]);

  console.log(fares);

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

          <title>Flights | Euro Holidays| Business Class Flights | International Business Class Flights</title>
        <meta name="description" content="Elevate your travel experience with our business class flights on international routes. Enjoy unparalleled comfort and luxury in the skies." />
        <meta name="keywords" content="Business Class Flights Deals, Cheap Business Class Flights, International Business Class Flights, 
        Discounted Business Class Tickets, Best Business Class Flights, Affordable Flights, Economy Class Flight Deals, Cheap Economy Class Flights, 
        Discount  Flights, International Economy Class Flights " />
        <meta property="og:title" content="Flights - Euro Holidays | Business Class Flights | International Business Class Flights" />
        <meta property="og:description" content="Euro Holidays - Elevate your travel experience with our business class flights on international routes. 
        Enjoy unparalleled comfort and luxury in the skies. Don’t wait—book your international flight now and discover a new level of travel excellence!" />
       


      </Helmet>
      <div className="mb-16 ">
        {/* <div className="md:h-[350px] h-[200px] flex items-center justify-center overflow-hidden">
          <img
            class="object-cover h-full w-full"
            src="https://www.selgec.net/wp-content/uploads/2016/06/Advice-That-Will-Help-You-With-Your-Travels.jpg"
            alt=""
          />
        </div> */}
        {/* <div style={bannerStyles}>
          <h1 className="w-full mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
            Fares at Best price
          </h1>
        </div> */}
        <div className="w-[100%] mt-[4rem]">
          <img src={banner2} alt="" />
        </div>
        <div className="flex flex-col justify-center mt-12">
          <Searchbar />
        </div>
        <Container>
          <div className="flex justify-center w-full">
            <div className="mt-16 w-full flex flex-wrap justify-center">
              {fares.length > 0 ? (
                <>
                  {fares.map((fare, i) => (
                    <FareCard data={fare} key={i} />
                  ))}
                </>
              ) : (
                <>
                  <Loader />
                </>
              )}
            </div>
          </div>
        </Container>

        <Container>
          <div className="flex justify-center">
            {fares.length > 0 && (
              <LoadingButton
                sx={{ margin: "1rem" }}
                loading={fetching}
                disabled={blockApi}
                onClick={() => setSkip(skip + 1)}
                variant="contained"
              >
                {blockApi ? "No More" : "More"}
              </LoadingButton>
            )}
          </div>
          <>{isEmpty && <InquiryForm h1="Send Inquiry" />}</>
        </Container>
      </div>
    </Layout>
  );
}
