import MuiPhoneNumber from "material-ui-phone-number";
import { useEffect, useState } from "react";

import emailjs from "@emailjs/browser";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Container } from "components/container";
import Layout from "fragments/layout/layout";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { convertString } from "utils";
import { otherVisaCountries, visaCounties } from "utils/visaCountries";
import { LoadingButton } from "@mui/lab";
import { banner1, banner2, visaBanner } from "utils/media";

export function VisaInquiry() {
  const params = useParams();
  const { country } = params;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    nationality: "",
    city: "",
    visaAlreadyIssued: "",
    statusInUK: "",
    preferredResponse: "",
    timeToContact: "",
  });
  const [sending, setSending] = useState();

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (
      form.name &&
      form.email &&
      form.phone &&
      form.purpose &&
      form.nationality &&
      form?.city &&
      form?.visaAlreadyIssued &&
      form?.statusInUK &&
      form?.preferredResponse &&
      form?.timeToContact
    ) {
      setSending(true);
      emailjs
        .send(
          "service_wppu4t4",
          "template_nutpvo7",
          {
            ...form,
            siteName: "Travels Experts",
            visaCountry: convertString(country),
          },
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
            purpose: "",
            nationality: "",
            city: "",
            visaAlreadyIssued: "",
            statusInUK: "",
            preferredResponse: "",
            timeToContact: "",
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
    const foundDocument = [...visaCounties, ...otherVisaCountries].find(
      (item) => item.name == country
    );

    if (foundDocument) {
      console.log("Document found:", foundDocument);
    } else {
      console.log("Document not found.");
    }
  }, [visaCounties]);

  return (
    <Layout title="Visa Service Inquiry">
      {/* <div className="h-[320px] flex items-center mt-16 justify-center overflow-hidden">
        <img
          class="object-cover h-full w-full"
          src={banner2}
          // src="https://www.traveltrolley.co.uk/travel-infographics/Images/britons-cheader.jpg"
          alt=""
        />
      </div> */}
      <div className="w-[100%] mt-[4rem]">
        <img src={banner2} alt="" />
      </div>
      <h1 className="w-full my-12 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
        Apply Visa Services for
        <span className="text-primary font-bold">
          {" "}
          {convertString(country)}
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            className="inline m-4 w-[60px]"
            src={
              [...visaCounties, ...otherVisaCountries]?.find(
                (item) => item?.name == country
              )?.img
            }
          />
        </span>
      </h1>
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1 mx-6 gap-8">
          <div className="col-span-1 md:block hidden">
            <img
              src={
                [...visaCounties, ...otherVisaCountries]?.find(
                  (item) => item?.name == country
                )?.img
              }
              alt=""
            />
            {convertString(country)}
          </div>
          <form onSubmit={handleSubmit} className="col-span-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <TextField
                value={form?.name}
                label="Full Name"
                required
                onChange={(e) => handleChange(e, "name")}
              />

              <MuiPhoneNumber
                fullWidth
                required
                value={form?.phone}
                defaultCountry={"gb"}
                onChange={(value) => handleChange(value, "phone")}
                variant="outlined"
                label="Phone Number"
              />
              <TextField
                fullWidth
                required
                value={form?.email}
                label="Email"
                onChange={(e) => handleChange(e, "email")}
              />
              <TextField
                required
                value={form?.purpose}
                label="Purpose of Journey"
                onChange={(e) => handleChange(e, "purpose")}
              />
              <TextField
                required
                value={form?.nationality}
                label="Nationality"
                onChange={(e) => handleChange(e, "nationality")}
              />
              <TextField
                required
                value={form?.city}
                label="City"
                onChange={(e) => handleChange(e, "city")}
              />
              <div className="sm:col-span-2">
                <FormControl required fullWidth>
                  <InputLabel>
                    Schengen Visa Issued during the past 3 years
                  </InputLabel>
                  <Select
                    required
                    onChange={(e) => handleChange(e, "visaAlreadyIssued")}
                    label="Schengen Visa Issued during the past 3 years"
                    value={form?.visaAlreadyIssued}
                  >
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="sm:col-span-2">
                <FormControl required fullWidth>
                  <InputLabel>Status In UK</InputLabel>
                  <Select
                    required
                    onChange={(e) => handleChange(e, "statusInUK")}
                    label="Status In UK"
                    value={form?.statusInUK}
                  >
                    <MenuItem value={"UK BRP"}>UK BRP</MenuItem>
                    <MenuItem value={"UK BRC"}>UK BRC</MenuItem>
                    <MenuItem value={"UK PR"}>UK PR</MenuItem>
                    <MenuItem value={"UK ILR"}>UK ILR</MenuItem>
                    <MenuItem value={"UK Citizen"}>UK Citizen</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="sm:col-span-2">
                <FormControl required fullWidth>
                  <InputLabel>Response Preferred By</InputLabel>
                  <Select
                    required
                    onChange={(e) => handleChange(e, "preferredResponse")}
                    label="Response Preferred By"
                    value={form?.preferredResponse}
                  >
                    <MenuItem value={"By Email"}>By Email</MenuItem>
                    <MenuItem value={"By Phone"}>By Phone</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="sm:col-span-2">
                <TextField
                  required
                  fullWidth
                  value={form?.timeToContact}
                  label="Time To Contact"
                  onChange={(e) => handleChange(e, "timeToContact")}
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                loading={sending}
                sx={{ color: "white" }}
              >
                Send Message
              </LoadingButton>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  );
}
