// import React, { useEffect, useState } from "react";

// import {
//   collection,
//   query,
//   getDocs,
//   limit,
//   orderBy,
//   where,
// } from "firebase/firestore";
// import { db } from "config/firebase";
// import { Button } from "@mui/material";
// import Loader from "components/loader";
// import { convertString } from "utils";
// import { transitionAll } from "constants";
// import { Link } from "react-router-dom";

// export function HotDestinations() {
//   const [dests, setDests] = useState(null);

//   const getDests = async () => {
//     const arrOfData = [];
//     const ref = collection(db, "destinations");
//     const q = query(ref, orderBy("sortOrder"), limit(4));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       arrOfData.push({ ...doc.data(), _id: doc.id });
//     });
//     setDests(arrOfData);
//   };

//   useEffect(() => {
//     getDests();
//   }, []);

//   return (
//     <div>
//       <div className="bg-white">
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
//           <div className="flex items-center justify-between space-x-4">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">
//               Trending{" "}
//               <span className="text-primary font-bold"> Destinations</span>
//             </h2>
//             <Link
//               to="/destinations"
//               className="whitespace-nowrap text-sm font-medium text-primary"
//             >
//               View all
//               <span aria-hidden="true"> &rarr;</span>
//             </Link>
//           </div>
//           {dests?.length > 0 ? (
//             <div className="my-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
//               {dests?.map((product) => (
//                 <Link to={`/destinations/${product?.name}`} key={product.id}>
//                   <div className={`${transitionAll} cursor-pointer`}>
//                     <div className="h-72 w-full overflow-hidden rounded-lg">
//                       <img
//                         src={product.img}
//                         alt={product.imageAlt}
//                         className={`h-full w-full hover:scale-110 ${transitionAll} object-cover object-center`}
//                       />
//                     </div>
//                     <div className="relative mt-4">
//                       <h3 className="text-lg font-medium text-gray-900">
//                         {convertString(product?.name)}
//                       </h3>
//                     </div>
//                   </div>
//                   {/* <div className="mt-6">
//                     <a
//                       href={product.href}
//                       className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
//                       Add to bag
//                       <span className="sr-only">, {product.name}</span>
//                     </a>
//                   </div> */}
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="my-24">
//               <Loader />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  getDocs,
  limit,
  orderBy,
} from "firebase/firestore";
import { db } from "config/firebase";
import Loader from "components/loader";
import { convertString } from "utils";
import { transitionAll } from "constants";
import { Link } from "react-router-dom";

export function HotDestinations() {
  const [dests, setDests] = useState(null);

  const getDests = async () => {
    const arrOfData = [];
    const ref = collection(db, "destinations");
    const q = query(ref, orderBy("sortOrder"), limit(4));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });
    setDests(arrOfData);
  };

  useEffect(() => {
    getDests();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Trending <span className="text-primary">Destinations</span>
          </h2>
          <Link
            to="/destinations"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all &rarr;
          </Link>
        </div>

        {dests?.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {dests.map((product) => (
              <Link to={`/destinations/${product?.name}`} key={product._id}>
                <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 w-full">
                    <img
                      src={product.img}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-all duration-300"
                    />
                    {/* Optional overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {convertString(product?.name)}
                    </h3>
                    <div className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
                      Book Now <span>&rarr;</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="my-24">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
