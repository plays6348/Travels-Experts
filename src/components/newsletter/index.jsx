import { Link } from "react-router-dom";

export function Newsletter() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start an unforgetable journey!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80 ">
            Discover the world's wonders with Wanderlust Voyages. Your
            unforgettable journey begins here.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/destinations"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Explore Destinations
            </Link>
            {/* <Link href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link> */}
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true">
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
