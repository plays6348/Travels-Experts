import { Tab } from "@headlessui/react";
import Loader from "components/loader";
import { Map } from "components/map";
import Layout from "fragments/layout/layout";
import { Fragment, useEffect, useState } from "react";
import { CgHeart, CgShare } from "react-icons/cg";
import { LuBed, LuBuilding } from "react-icons/lu";
import { MdBathroom, MdOutlineRealEstateAgent } from "react-icons/md";
import { TbTrain } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { classNames } from "utils";
import { holidays } from "utils/holidays";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoQuestion } from "react-icons/go";
import { number } from "utils/constants";

const faqs = [
  {
    question: "What Paint do you use in Walls",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "What are the sizes of bedrooms?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "What are the sizes of bedrooms?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export function HolidayDetails() {
  const params = useParams();
  const { id } = params;
  const [listingDetail, setListingDetail] = useState();

  const getObjectById = (arr, targetId) => {
    return arr.find((item) => item.id == targetId);
  };

  useEffect(() => {
    setListingDetail(getObjectById(holidays, id));
  }, [id]);

  console.log(id);

  return (
    <Layout title="Holiday Package Details">
      <div className="bg-white">
        {listingDetail ? (
          <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            {/* Product */}
            <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
              {/* Product image */}
              <div className="lg:col-span-4 lg:row-end-1">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                  {/* <img src={product.imageSrc} alt={product.imageAlt} /> */}
                  <Swiper
                    navigation={true}
                    pagination={true}
                    loop={true}
                    style={{ width: "100%" }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper">
                    {listingDetail?.images?.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt=""
                          className="object-cover object-center w-full h-full"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* Product details */}
              <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
                <div className="flex flex-col-reverse">
                  <div className="mt-4">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {listingDetail?.name}
                    </h1>

                    <h2 id="information-heading" className="sr-only">
                      Product information
                    </h2>
                    {/* <p className="mt-2 text-sm text-gray-500">
                      (Added {convertDate(listingDetail?.addedOn)})
                    </p> */}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl text-gray-600">
                        {listingDetail?.place}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <CgShare className="text-gray-400 text-3xl hover:text-primary cursor-pointer" />
                      <div className="border border-r" />
                      <CgHeart className=" text-3xl text-red-500 cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-primary text-3xl font-semibold">
                    $ {listingDetail?.price}
                  </h2>
                  <p className="text-sm text-gray-500">Per Night</p>
                </div>

                <div className="mt-6">
                  <div className=" grid grid-cols-2 gap-2 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <MdOutlineRealEstateAgent className="text-xl" />
                      Type: {listingDetail?.propertyType}
                    </div>
                    <div className="flex items-center gap-1">
                      <LuBed className="text-xl" />x {listingDetail?.bedrooms}{" "}
                      bedrooms
                    </div>
                    <div className="flex items-center gap-1">
                      <MdBathroom className="text-xl" />x{" "}
                      {listingDetail?.bathrooms} bathrooms
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  <Link
                    to="/contactus"
                    type="button"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50">
                    Contact us
                  </Link>
                  <a href={`tel:${number}`}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary/20 px-8 py-3 text-base font-medium text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50">
                      Call {number}
                    </button>
                  </a>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Key Features
                  </h3>
                  <div className="prose text-sm prose-sm mt-4 text-gray-500">
                    <div className="grid grid-cols-2">
                      {listingDetail?.keyFeatures.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Description
                  </h3>
                  <p className="mt-4 text-sm text-gray-500">
                    {listingDetail?.description}
                  </p>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Location
                  </h3>
                  <div className="my-4 rounded-lg overflow-hidden">
                    <Map
                      latitude={listingDetail?.directions?.lat}
                      longitude={listingDetail?.directions?.long}
                      makerName={listingDetail?.name}
                    />
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
                <Tab.Group as="div">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "border-primary text-primary"
                              : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                            "flex items-center gap-1 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                          )
                        }>
                        <TbTrain className="text-xl" />
                        Main Areas
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "border-primary text-primary"
                              : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                            "flex items-center gap-1 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                          )
                        }>
                        <LuBuilding className="text-xl" />
                        Places
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "border-primary text-primary"
                              : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                            "flex items-center gap-1 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                          )
                        }>
                        <GoQuestion className="text-xl" />
                        FAQs
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    <Tab.Panel className="-mb-10 text-sm">
                      <h3 className="mt-10 font-medium text-gray-900">
                        Nearby Stations
                      </h3>

                      <dl>
                        {listingDetail?.stations?.map((item, id) => (
                          <Fragment key={id}>
                            <dt className="mt-4 font-medium text-gray-500">
                              {item?.name} - {item?.distance}
                            </dt>
                          </Fragment>
                        ))}
                      </dl>
                    </Tab.Panel>

                    <Tab.Panel className="text-sm">
                      <h3 className="mt-10 font-medium text-gray-900">
                        Popular Places
                      </h3>
                      <dl>
                        {listingDetail?.popularPlaces?.map((item, id) => (
                          <Fragment key={id}>
                            <dt className="mt-4 font-medium text-gray-500">
                              {item?.name} - {item?.distance}
                            </dt>
                          </Fragment>
                        ))}
                      </dl>
                    </Tab.Panel>
                    <Tab.Panel className="text-sm text-gray-500">
                      <h3 className="mt-10 font-medium text-gray-900">
                        Frequently Asked Questions
                      </h3>
                      <dl>
                        {faqs.map((faq) => (
                          <Fragment key={faq.question}>
                            <dt className="mt-6 font-medium text-gray-700">
                              {faq.question}
                            </dt>
                            <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                              <p>{faq.answer}</p>
                            </dd>
                          </Fragment>
                        ))}
                      </dl>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </Layout>
  );
}
