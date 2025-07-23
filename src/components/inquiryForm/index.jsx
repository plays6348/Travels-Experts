import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import { useState } from "react";
import { AiFillRedEnvelope } from "react-icons/ai";
import { HiOfficeBuilding, HiPhoneIncoming } from "react-icons/hi";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import ContactCard from 'components/contactCard';

export function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    returnDate: "",
    deptDate: "",
    budget: "",
    dept: "",
    dest: "",
    msg: "",
  });
  const [sending, setSending] = useState();

  const handleSubmit = () => {
    if (
      form.name &&
      form.email &&
      form.phone &&
      form.returnDate &&
      form.deptDate &&
      form?.budget
    ) {
      setSending(true);
      emailjs
        .send(
          "service_wppu4t4",
          "template_bsctuhp",
          { ...form, siteName: "Euro Holidays" },
          "-Pfw7rBnJa1xmql5v"
        )
        .then((res) => {
          console.log(res);
          toast?.success(
            "Inquiry sent successfully, We will call you for further processing."
          );
          setSending(false);
          setForm({
            name: "",
            email: "",
            phone: "",
            returnDate: "",
            deptDate: "",
            budget: "",
            siteName: "Euro Holidays",
            inquiryLocation: "User Sent inquiry by selecting the fare.",
            msg: "",
          });
        })
        .catch((err) => {
          console.log(err);
          toast?.error("Something went wrong, Inquiry not sent.");
          setSending(false);
        });
    } else {
      toast?.error("Kindly fill the complete Form.");
    }
  };

  const handleChange = (e, fieldName) => {
    if (fieldName == "phone") {
      setForm({ ...form, phone: e });
    } else {
      setForm({ ...form, [fieldName]: e.target.value });
    }
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-4 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Send us an
              <span className="text-primary font-bold"> Inquiry</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Send us an inquiry. Our team will shortly reach out to you to
              offer you something better.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4 hover:text-primary cursor-pointer">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <HiOfficeBuilding className="h-7 w-6" aria-hidden="true" />
                </dt>
                
                <dd>
                  <p>
                    Office 5899 
                    321-323 High Road, <br />
                    Chadwell Heath 
                    Essex 
                    ,RM6 6AX <br />
                    UK
                  </p>
                </dd>
              </div>
              <div className="flex gap-x-4 hover:text-primary cursor-pointer">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <HiOfficeBuilding className="h-7 w-6" aria-hidden="true" />
                </dt>
                
                <dd>
                  <p>
                    Birmingham 3 Stone Close, B38 8QR

                  </p>
                </dd>
              </div>
              
              <div className="flex gap-x-4 hover:text-primary cursor-pointer">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <HiPhoneIncoming className="h-7 w-6" aria-hidden="true" />
                </dt>
                <dd>
                  <a href="tel:020 8145 4449">020 8145 4449</a>
                </dd>
              </div>
              <div className="flex gap-x-4 hover:text-primary cursor-pointer">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <AiFillRedEnvelope className="h-7 w-6" aria-hidden="true" />
                </dt>
                <dd>
                  <a href="mailto:contact@euroholidays.com">
                    contact@euroholidays.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-4 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <TextField
                  fullWidth
                  label="Full Name"
                  value={form?.name}
                  onChange={(e) => handleChange(e, "name")}
                />
              </div>
              <div className="sm:col-span-2">
                <TextField
                  fullWidth
                  label="Email"
                  value={form?.email}
                  onChange={(e) => handleChange(e, "email")}
                />
              </div>
              <div className="sm:col-span-2">
                <MuiPhoneNumber
                  fullWidth
                  defaultCountry={"gb"}
                  // regions={"europe"}
                  value={form?.phone}
                  onChange={(value) => handleChange(value, "phone")}
                  variant="outlined"
                  label="Phone Number"
                />
              </div>
              <div className="sm:col-span-2">
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Your Budget
                  </InputLabel>
                  <OutlinedInput
                    value={form?.budget}
                    id="outlined-adornment-amount"
                    onChange={(e) => handleChange(e, "budget")}
                    startAdornment={
                      <InputAdornment position="start">£</InputAdornment>
                    }
                    label="Your Budget"
                  />
                </FormControl>
              </div>
              <TextField
                label="Departure Date"
                type="date"
                value={form?.deptDate}
                onChange={(e) => handleChange(e, "deptDate")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Return Date"
                type="date"
                value={form?.returnDate}
                onChange={(e) => handleChange(e, "returnDate")}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <div className="sm:col-span-2">
                <TextField
                  fullWidth
                  multiline
                  value={form?.msg}
                  label="Message"
                  onChange={(e) => handleChange(e, "msg")}
                  rows={4}
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button
                size="large"
                // sx={{ margin: "0 0rem 1rem 1rem" }}
                onClick={() => handleSubmit()}
                disabled={sending}
                fullWidth
                variant="contained"
              >
                Book Now
              </Button>
            </div>
          </div>
        </form>
      </div>
       <div>
      <h1 className="text-2xl font-bold mb-4"></h1>
      {/* Using the ContactCard component */}
      <ContactCard />
    </div>
      
    </div>
   

    
    
  );
}
