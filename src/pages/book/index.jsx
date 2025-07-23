import emailjs from "@emailjs/browser";
import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { db } from "config/firebase";
import { doc, getDoc } from "firebase/firestore";
import Layout from "fragments/layout/layout";
import MuiPhoneNumber from "material-ui-phone-number";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { convertString } from "utils";
import "./index.css";
import { banner1 } from "utils/media";

export default function BookNow() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    returnDate: "",
    deptDate: "",
    budget: "",
    siteName: "Travels Experts",
    inquiryLocation: "User Sent inquiry by selecting the fare.",
    msg: "",
  });
  const [sending, setSending] = useState();
  const [data, setData] = useState();
  const [selectedFare, setSelectedFare] = useState();

  const getData = async (id) => {
    const docRef = doc(db, "fares", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      return;
    }
  };

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
          { ...form, ...selectedFare },
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
            siteName: "Travels Experts",
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

  useEffect(() => {
    if (data) {
      setSelectedFare({
        dept: `${convertString(data.deptAirport.airport)} - ${
          data.deptAirport.airportCode
        } - ${convertString(data.deptAirport.city)}`,
        dest: `${convertString(data.destAirport.airport)} - ${
          data.destAirport.airportCode
        } - ${convertString(data.destAirport.city)}`,
        price: data.price,
        airline: convertString(data.airline.name),
      });
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  // console.log(form);
  // console.log(data);
  console.log({ ...form, ...selectedFare });

  const bannerStyles = {
    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/euroholidays-55335.appspot.com/o/siteMedia%2Fdest_banner%20Final.png?alt=media&token=ed0c5510-41ef-4736-ac52-a39d08a98a1a)`,
    // backgroundImage: `url(https://www.selgec.net/wp-content/uploads/2016/06/Advice-That-Will-Help-You-With-Your-Travels.jpg)`,
    marginTop: "4rem",
    width: "100%",
    height: "20rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textShadow: "2px 2px 21px grey",
  };

  return (
    <Layout title="Book Ticket">
      {/* <div style={bannerStyles}>
        <h1 className="w-full mb-4 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
          Booking Your Fare Now 🎉
        </h1>
      </div> */}
      <div className="w-[100%] mt-[4rem]">
        <img src={banner1} alt="" />
      </div>
      <div className="bookPage">
        <div className="flex flex-col">
          <div className="text-left mx-4 bg-primary p-2 rounded-lg">
            <p className="text-2xl text-white">Selected Fare:</p>
          </div>
          <div className="gridSectionOne">
            <div className="selectedFare">
              <div className="selectedFare__body">
                <div className="selectedFare__grid">
                  <Typography sx={{ fontWeight: "bolder" }}>
                    Departure Airport:{" "}
                  </Typography>
                  {data ? (
                    <Typography>
                      {`${convertString(data.deptAirport.airport)} - ${
                        data.deptAirport.airportCode
                      } - ${convertString(data.deptAirport.city)}`}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Divider />
                <div className="selectedFare__grid">
                  <Typography sx={{ fontWeight: "bolder" }}>
                    Destination Airport:{" "}
                  </Typography>
                  {data ? (
                    <Typography>
                      {`${convertString(data.destAirport.airport)} - ${
                        data.destAirport.airportCode
                      } - ${convertString(data.destAirport.city)}`}
                    </Typography>
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Divider />
                <div className="selectedFare__grid">
                  <Typography sx={{ fontWeight: "bolder" }}>
                    Selected Airline:{" "}
                  </Typography>
                  {data ? (
                    // <Typography>{convertString(data.airline.name)}</Typography>
                    <img
                      style={{ width: "120px" }}
                      src={data.airline.img}
                      alt="airline logo"
                    />
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Divider />
                <div className="selectedFare__grid">
                  <Typography sx={{ fontWeight: "bolder" }}>
                    Total Fare:{" "}
                  </Typography>
                  {data ? (
                    <Typography variant="h6" sx={{ color: "red" }}>
                      from £{data.price} incl. Tax
                    </Typography>
                  ) : (
                    <Skeleton variant="text" />
                  )}
                </div>
                <Typography variant="caption" sx={{ opacity: "0.8" }}>
                  Please Note: If the requested fare will not be available then
                  we will offer you the best alternate fare.
                </Typography>
              </div>
            </div>
            {/* <div className="book__img">
              <img src="/assets/book.png" alt="book__image" />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-left mx-4 bg-primary p-2 rounded-lg">
            <p className="text-2xl text-white">Customer Details:</p>
          </div>
          <div className="customerDetails">
            <div className="customerDetails__bodyContainer">
              <div className="customerDetails__body">
                <TextField
                  size="small"
                  label="Full Name"
                  value={form?.name}
                  onChange={(e) => handleChange(e, "name")}
                />
                <TextField
                  size="small"
                  label="Email"
                  value={form?.email}
                  onChange={(e) => handleChange(e, "email")}
                />
                <MuiPhoneNumber
                  size="small"
                  defaultCountry={"gb"}
                  // regions={"europe"}
                  value={form?.phone}
                  onChange={(value) => handleChange(value, "phone")}
                  variant="outlined"
                  label="Phone Number"
                />
                <FormControl fullWidth>
                  <InputLabel size="small" htmlFor="outlined-adornment-amount">
                    Your Budget
                  </InputLabel>
                  <OutlinedInput
                    size="small"
                    value={form?.budget}
                    id="outlined-adornment-amount"
                    onChange={(e) => handleChange(e, "budget")}
                    startAdornment={
                      <InputAdornment position="start">£</InputAdornment>
                    }
                    label="Your Budget"
                  />
                </FormControl>
                <TextField
                  size="small"
                  label="Departure Date"
                  type="date"
                  value={form?.deptDate}
                  onChange={(e) => handleChange(e, "deptDate")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  size="small"
                  label="Return Date"
                  type="date"
                  value={form?.returnDate}
                  onChange={(e) => handleChange(e, "returnDate")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  multiline
                  size="small"
                  value={form?.msg}
                  label="Message"
                  onChange={(e) => handleChange(e, "msg")}
                  rows={4}
                />
              </div>
            </div>
          </div>
          <Button
            sx={{ margin: "0 1rem 1rem 1rem" }}
            onClick={() => handleSubmit()}
            disabled={sending || !data}
            variant="contained"
          >
            Book Now
          </Button>
        </div>
      </div>
    </Layout>
  );
}
