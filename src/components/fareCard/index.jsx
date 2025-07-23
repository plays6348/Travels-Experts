import { Button, Divider, Typography } from "@mui/material";
import { GoArrowBoth } from "react-icons/go";
import { Link } from "react-router-dom";
import { convertString } from "utils";
import "./index.css";

const muiStyles = {
  opacityLow: {
    opacity: "0.7",
  },
  bolder: {
    fontWeight: "bolder",
  },
};

export default function FareCard({ data, index }) {
  const convertName = (name) => {
    const _name = name.split("-");
    _name.pop(_name.length - 1);

    return convertString(_name.join("-"));
  };

  // console.log(data);
  // console.log(index);

  return (
    <div className="fareCard">
      {/* {index < 4 && (
        <span className="fareCard__badge">
          <img src="/assets/offer.png" alt="offer badge" />
        </span>
      )} */}
      <div className="fareCard__top">
        <div className="airline__logoForMobile">
          <img
            src={data.airline.img}
            className="airline__logo"
            alt="airline logo"
          />
        </div>
        <div className="fareCard__top__divider">
          <Divider />
        </div>
        <div className="deptName">
          <h3 className="text-2xl font-bold">
            {convertString(data.deptCountry.name)}
          </h3>
          <Typography variant="caption" sx={muiStyles.opacityLow}>
            {convertName(data.deptAirport.airport)},
          </Typography>
        </div>
        <div className="arrow">
          <GoArrowBoth />
        </div>
        <div className="destName">
          <h3 className="text-2xl font-bold">
            {convertString(data.destCountry.name)}
          </h3>
          <Typography variant="caption" sx={muiStyles.opacityLow}>
            {convertName(data.destAirport.airport)},
          </Typography>
        </div>
        <div className="price">
          <Typography
            variant="h5"
            sx={{ ...muiStyles.bolder, color: "#00b6f2" }}>
            £{data.price}
          </Typography>
          <p className="opacity-[0.3] text-[12px]">Subject to Availablity</p>
        </div>
      </div>
      <Divider />
      <div className="fareCard__bottom">
        <div className="airline__logoForPC">
          <img
            src={data.airline.img}
            className="airline__logo"
            alt="airline logo"
          />
        </div>
        <div className="flex gap-2">
          <a href={`tel:020 8145 4449`}>
            <Button variant="outlined" style={{ fontWeight: "bold" }}>
              020 8145 4449
            </Button>
          </a>
          <div>
            <Link to={`/book/${data._id}`}>
              <Button variant="contained">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
