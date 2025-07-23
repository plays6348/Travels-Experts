import LoadingButton from "@mui/lab/LoadingButton";
import { Skeleton, ThemeProvider } from "@mui/material";
import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
  where,
} from "firebase/firestore";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "fragments/layout/layout";
import Searchbar from "components/searchEngine";
import FareCard from "components/fareCard";
import Loader from "components/loader";
import { db } from "config/firebase";
import { convertString } from "utils";
import { InquiryForm } from "components/inquiryForm";
import { Container } from "components/container";

export function SingleDestination() {
  const router = useNavigate();
  const params = useParams();
  const { id } = params;
  const [fares, setFares] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [skip, setSkip] = useState(0);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);
  const [destData, setDestData] = useState(null);

  const getData = async () => {
    if (!blockApi) {
      setFetching(true);
      if (fares.length == 0) {
        const arrOfData = [];
        const q = query(
          collection(db, "fares"),
          where("destCountry.name", "==", id),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setFares(arrOfData);
        // console.log(arrOfData);
        if (arrOfData.length === 0) {
          setIsEmpty(true);
        }
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
      } else if (fares.length > 0) {
        const arrOfData = [];
        const q = query(
          collection(db, "fares"),
          where("destCountry.name", "==", id),
          startAfter(lastDocu),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setFares([...fares, ...arrOfData]);
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
      }
      setFetching(false);
    }
  };

  const getDestination = async () => {
    const arrOfData = [];
    const q = query(collection(db, "destinations"), where("name", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });

    setDestData(arrOfData[0]);
  };

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

  useEffect(() => {
    if (id) {
      getData();
      getDestination();
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [skip]);

  console.log(id);
  console.log(fares);
  console.log(destData);

  return (
    <Layout title={"Destinations"}>
      <div className="faresPage">
        {destData ? (
          <>
            <div style={bannerStyles}>
              {/* <img src={destData.banner} alt={`${destData.name} image`} /> */}
              <h1 className="text-4xl">{convertString(id)}</h1>
            </div>
            <Container className="mt-16">
              <div className=" flex justify-center">
                <Searchbar />
              </div>
            </Container>
          </>
        ) : (
          <>
            {id && (
              <div className="banner">
                <h1>{convertString(id)}</h1>
              </div>
            )}
          </>
        )}
        <Container className="mt-16">
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
      </div>
      <Container>
        <div className="flex  justify-center">
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
    </Layout>
  );
}
