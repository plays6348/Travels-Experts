import img1 from 'air1.png'
const incentives = [
  {
    name: "Seamless Application:",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "Simplify your Schengen Visa application with our user-friendly process, ensuring a smooth journey from start to finish.",
  },
  {
    name: "Expert Support:",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Navigate visa complexities effortlessly with our experienced team's personalized guidance and support for a successful application.",
  },
  {
    name: "Swift Processing:",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Count on our timely and reliable service to secure your Schengen Visa promptly, aligning with your travel plans seamlessly.",
  },
];

export function Incentives() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl py-24  sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Affordable Flights to Your Dream Destinations{" "}
                <span className="text-white font-bold">
                  {" "}
                   <br />Cheapest Rates on Airline Tickets
                </span>
              </h2>
              <p className="mt-4 text-base text-slate-100">
                At Euro Holidays, we specialize in offering budget-friendly airline tickets without compromising on comfort and convenience. 
                Whether you’re planning a vacation or a business trip, our affordable flight options will get you where you need to go, all while saving you money. 
                Explore the world with us, knowing you're getting the best rates available.


              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
              src={img1}
                //src="b-431fhttps://firebasestorage.googleapis.com/v0/b/euroholidays-55335.appspot.com/o/siteMedia%2FVisa_home.png?alt=media&token=ca5c4245-b06-ba99-da3153122b66"
                // src="https://blog.getcompass.ai/content/images/size/w1384/2023/10/commission-for-travel-agent.webp"
                alt=""
                className="object-cover  object-center"
              />
            </div>
          </div>
          {/* <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
