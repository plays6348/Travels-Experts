import { Button } from "@mui/material";
import Layout from "fragments/layout/layout";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Layout>
        <main className="grid min-h-full place-items-center bg-light px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/">
                <Button
                  className="bg-blue text-white w-fit"
                  size="large"
                  variant="contained">
                  Home
                </Button>
              </Link>
              {/* <a href="#" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
