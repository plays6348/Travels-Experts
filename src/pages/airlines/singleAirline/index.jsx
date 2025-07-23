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
  where,
} from "firebase/firestore";
import Layout from "fragments/layout/layout";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { convertString } from "utils";
import { airlines } from "utils/data";

export function SingleAirline() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [fares, setFares] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const airline = airlines?.find((item) => item?.name == id);

  const [skip, setSkip] = useState(0);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);

  const getData = async () => {
    if (!blockApi) {
      setFetching(true);
      if (fares.length == 0) {
        const arrOfData = [];
        const q = query(
          collection(db, "fares"),
          where("airline.name", "==", id),
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
          where("airline.name", "==", id),
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

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [skip]);

  console.log(airline);
  // console.log(footerData);
  // console.log(fares);

  return (
    <Layout title={"Airlines"}>
      <div className="my-16">
        {airline && (
          <>
            <div className="bg-primary/30">
              {id && (
                <div className="flex items-center justify-center gap-4">
                  <h1 className="my-16 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
                    Fares for
                    <span className="text-primary font-bold">
                      {" "}
                      {convertString(id)}
                    </span>
                  </h1>{" "}
                  <img
                    src={airline.img}
                    alt={`${airline?.name} image`}
                    className="w-[100px] inline h-[70px]"
                  />
                </div>
              )}
            </div>
            <Container className="mt-16">
              <div className=" flex justify-center">
                <Searchbar />
              </div>
            </Container>
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
