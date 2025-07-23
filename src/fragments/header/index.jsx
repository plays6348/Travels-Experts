import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import { Button, Divider } from "@mui/material";
import { Container } from "components/container";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { number } from "utils/constants";
import logo from 'Logo1.svg'
import logoblue from 'logoblue.svg'
import logoblack from 'logoblack.svg'




export function Header(props) {
  return (
    <header className="w-full">
      <nav className="backdrop-blur-md px-4 sm:px-0 bg-white/70 shadow-1 z-[999] fixed w-full top-0">
        <Container className="z-50 flex justify-between py-4">
          <div className="relative z-10 flex items-center gap-16">
            {/* <Link to="/" aria-label="Home">
              <img src={logoblack} className="w-[215px]" alt="" />
            </Link>  comment Logo copyright issue  */}
            <a href="/">
              <span className="sr-only">Euro Holidays</span>
             
              <h1 className="text-2xl font-bold border-t-4 border-t-primary">
                Euro Holidays
              </h1>
               
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center lg:gap-4">
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="/visa-services">Visa Services</HeaderLink>
              <HeaderLink to="/destinations">Destinations</HeaderLink>
              <HeaderLink to="/holidays">Holidays</HeaderLink>
              <HeaderLink to="/flights">Flights</HeaderLink>
              <HeaderLink to="/airlines">Airlines</HeaderLink>
              <Link to="/contactus">
                <Button variant="outlined" className="hidden lg:block">
                  Send Inquiry
                </Button>
              </Link>
              <a href={`tel:${number}`}>
                <Button
                  variant="contained"
                  sx={{ color: "white" }}
                  className="hidden lg:block">
                  Call {number}
                </Button>
              </a>
            </div>

            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 bg-white -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation">
                    {({ open }) =>
                      open ? (
                        <AiOutlineClose className="h-6 w-6 text-primary" />
                      ) : (
                        <HiOutlineMenuAlt4 className="h-6 w-6 text-primary" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 bg-gray top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-24 shadow-2xl shadow-gray-900/20">
                          <div className="space-y-4 flex flex-col">
                            <Link to="/">Home</Link>
                            {/* <Link to="/visa-services">Visa Services</Link> */}
                            <Link to="/holidays">Holidays</Link>
                            <Link to="/destinations">Destinations</Link>
                            <Link to="/flights">Flights</Link>
                            <Link to="/airlines">Airlines</Link>
                          </div>

                          <Divider style={{ margin: "20px 0" }} />

                          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                            <Link to="/contactus">
                              <Button
                                fullWidth
                                variant="outlined"
                                className="hidden lg:block">
                                Send Inquiry
                              </Button>
                            </Link>
                            <a href={`tel:${number}`}>
                              <Button
                                fullWidth
                                variant="contained"
                                sx={{ color: "white" }}
                                className="hidden lg:block">
                                Call {number}
                              </Button>
                            </a>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
}

const HeaderLink = ({ to, children }) => {
  const { pathname } = useLocation();
  const isCurrent = pathname === to;

  return (
    <span className={` inline-block relative group`}>
      <Link
        as={HTMLParagraphElement}
        to={to}
        className={`text-md  text-gray-800 pb-1 hover:text-primary transition duration-300 ${
          isCurrent ? "border-b-2 border-primary text-primary" : ""
        }`}>
        {children}
      </Link>
    </span>
  );
};
