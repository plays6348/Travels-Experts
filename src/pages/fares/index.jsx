import { useEffect, useState } from "react";

// firebase
import FareCard from "components/fareCard";
import { InquiryForm } from "components/inquiryForm";
import Loader from "components/loader";
import { db } from "config/firebase";
import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import Layout from "fragments/layout/layout";
import { GoArrowBoth } from "react-icons/go";
import { useNavigate, useSearchParams } from "react-router-dom";
import { convertString } from "utils";
import { Container } from "components/container";
import { LoadingButton } from "@mui/lab";

export function Fares() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dest = searchParams.get("dest");
  const dept = searchParams.get("dept");
  const airline = searchParams.get("airline");

  const [fares, setFares] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const [skip, setSkip] = useState(0);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);
  const [destData, setDestData] = useState();

  // console.log(airline);
  console.log({ dest, dept, airline });

  const getData = async () => {
    if (!blockApi) {
      setFetching(true);
      if (fares.length == 0) {
        if (airline != "all") {
          if (dest != "all" && dept != "all") {
            const arrOfData = [];
            const q = query(
              collection(db, "fares"),
              where("deptAirport.airportCode", "==", dept),
              where("destAirport.airportCode", "==", dest),
              where("airline.airlineCode", "==", airline),
              limit(10)
            );
            const querySnapshot = await getDocs(q);
            setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              arrOfData.push({ ...doc.data(), _id: doc.id });
            });
            setFares(arrOfData);
            console.log("search by both");
            if (arrOfData.length === 0) {
              setIsEmpty(true);
            }
            if (arrOfData.length < 10) {
              setBlockApi(true);
            }
            setFetching(false);
            return;
          } else if (dept != "all") {
            const arrOfData = [];
            const q = query(
              collection(db, "fares"),
              where("deptAirport.airportCode", "==", dept),
              where("airline.airlineCode", "==", airline),
              limit(10)
            );
            const querySnapshot = await getDocs(q);
            setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              arrOfData.push({ ...doc.data(), _id: doc.id });
            });
            setFares(arrOfData);
            console.log("search by dept");
            if (arrOfData.length === 0) {
              setIsEmpty(true);
            }
            if (arrOfData.length < 10) {
              setBlockApi(true);
            }
            setFetching(false);
            return;
          } else if (dest != "all") {
            const arrOfData = [];
            const q = query(
              collection(db, "fares"),
              where("destAirport.airportCode", "==", dest),
              where("airline.airlineCode", "==", airline),
              limit(10)
            );
            const querySnapshot = await getDocs(q);
            setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              arrOfData.push({ ...doc.data(), _id: doc.id });
            });
            setFares(arrOfData);
            console.log("search by dest");
            if (arrOfData.length === 0) {
              setIsEmpty(true);
            }
            if (arrOfData.length < 10) {
              setBlockApi(true);
            }
            setFetching(false);
            return;
          }
        } else if (airline == "all") {
          if (dest != "all" && dept != "all") {
            const arrOfData = [];
            const q = query(
              collection(db, "fares"),
              where("deptAirport.airportCode", "==", dept),
              where("destAirport.airportCode", "==", dest),
              limit(10)
            );
            const querySnapshot = await getDocs(q);
            setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              arrOfData.push({ ...doc.data(), _id: doc.id });
            });
            setFares(arrOfData);
            console.log("search by both");
            if (arrOfData.length === 0) {
              setIsEmpty(true);
            }
            if (arrOfData.length < 10) {
              setBlockApi(true);
            }
            setFetching(false);
            return;
          } else if (dept != "all") {
            const arrOfData = [];
            const q = query(
              collection(db, "fares"),
              where("deptAirport.airportCode", "==", dept),
              limit(10)
            );
            const querySnapshot = await getDocs(q);
            setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              arrOfData.push({ ...doc.data(), _id: doc.id });
            });
            setFares(arrOfData);
            console.log("search by dept");
            if (arrOfData.length === 0) {
              setIsEmpty(true);
            }
            if (arrOfData.length < 10) {
              setBlockApi(true);
            }
            setFetching(false);
            return;
          } else if (dest != "all") {
            const arrOfData = [];
            const q = query(
              collection(db, "fares"),
              where("destAirport.airportCode", "==", dest),
              limit(10)
            );
            const querySnapshot = await getDocs(q);
            setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              arrOfData.push({ ...doc.data(), _id: doc.id });
            });
            setFares(arrOfData);
            console.log("search by dest");
            if (arrOfData.length === 0) {
              setIsEmpty(true);
            }
            if (arrOfData.length < 10) {
              setBlockApi(true);
            }
            setFetching(false);
            return;
          }
        }
      } else if (fares.length > 0) {
        if (dest != "all" && dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            where("destAirport.airportCode", "==", dest),
            startAfter(lastDocu),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares([...fares, ...arrOfData]);
          console.log("search by both");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dept != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("deptAirport.airportCode", "==", dept),
            startAfter(lastDocu),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares([...fares, ...arrOfData]);
          console.log("search by dept");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        } else if (dest != "all") {
          const arrOfData = [];
          const q = query(
            collection(db, "fares"),
            where("destAirport.airportCode", "==", dest),
            startAfter(lastDocu),
            limit(10)
          );
          const querySnapshot = await getDocs(q);
          setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
          querySnapshot.forEach((doc) => {
            arrOfData.push({ ...doc.data(), _id: doc.id });
          });
          setFares([...fares, ...arrOfData]);
          console.log("search by dest");
          if (arrOfData.length === 0) {
            setIsEmpty(true);
          }
          if (arrOfData.length < 10) {
            setBlockApi(true);
          }
          setFetching(false);
          return;
        }
      }
    }
  };

  const getDestinationData = async () => {
    const arrOfData = [];
    const q = query(
      collection(db, "destinations"),
      where("name", "==", fares[0]?.destCountry?.name)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });

    setDestData(arrOfData[0]);
  };

  useEffect(() => {
    if (dept && dest) {
      getData();
    }
  }, [dest, dept]);

  useEffect(() => {
    if (dept && dest) {
      getData();
    }
  }, [skip]);

  useEffect(() => {
    if (fares?.length > 0) {
      getDestinationData();
    }
  }, [fares]);

  const bannerStyles = {
    backgroundImage: destData ? `url(${destData.banner})` : "",
    marginTop: "4.5rem",
    width: "100%",
    height: "15rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textShadow: "2px 2px black",
  };

  console.log(fares);
  console.log(isEmpty);
  console.log(destData);

  return (
    <Layout title={"Fares"}>
      <div className="faresPage">
        {fares?.length > 0 ? (
          <>
            {destData ? (
              <>
                {destData?.banner ? (
                  <div className="bg-primary/50 mt-12 h-[200px] flex flex-row items-center justify-center">
                    {dept != "all" && dest == "all" && (
                      <h1 style={{ marginRight: "5px" }}>From</h1>
                    )}
                    <h1 className="flex text-3xl items-center gap-2">
                      {dept != "all" ? (
                        <>{convertString(fares[0].deptAirport.city)}</>
                      ) : (
                        <>To</>
                      )}
                      {dept != "all" && dest != "all" ? (
                        <span className="banner__icon">
                          <GoArrowBoth />
                        </span>
                      ) : (
                        <> </>
                      )}
                      {dest != "all" && (
                        <>{convertString(fares[0].destAirport.city)}</>
                      )}
                    </h1>
                  </div>
                ) : (
                  <div style={bannerStyles}>
                    <h1 className="text-4xl">
                      {convertString(destData?.name)} 📍
                    </h1>
                  </div>
                )}
              </>
            ) : (
              <Loader />
            )}
          </>
        ) : (
          <>
            <div className="bg-primary/50 mt-12 h-[200px] flex flex-row items-center justify-center">
              <h1 className="flex text-3xl items-center gap-2">
                {dept?.toUpperCase()}
                <GoArrowBoth />
                {dest?.toUpperCase()}
              </h1>
            </div>
          </>
        )}
        <Container className="mt-8">
          <div className="flex justify-center w-full">
            <div className="mt-2 w-full flex flex-wrap justify-center">
              {fares.length > 0 ? (
                <>
                  {fares.map((fare, i) => (
                    <FareCard data={fare} key={i} />
                  ))}
                </>
              ) : (
                <>{!isEmpty && <Loader />}</>
              )}
            </div>
          </div>
        </Container>

        <Container>
          <div className="flex  justify-center">
            {fares.length > 0 && (
              <LoadingButton
                sx={{ margin: "1rem" }}
                loading={fetching}
                disabled={blockApi}
                onClick={() => setSkip(skip + 1)}
                variant="contained">
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
