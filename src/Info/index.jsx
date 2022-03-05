import React, { useState } from "react";
import "./index.scss";
import { location, email, phone, copy } from "../assets";

function Info() {
  const [snack, setSnack] = useState("");

  const phoneNumber = "9170020295";
  const mailId = "premprakashashramayodhya@gmail.com";
  const mapLink =
    "https://www.google.com/maps/place/26%C2%B046'00.1%22N+82%C2%B008'17.3%22E/@26.7666933,82.1359603,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe3cb70f5619662d0!8m2!3d26.7666933!4d82.138149?hl=en";

  const onCopy = (title, text) => {
    navigator.clipboard.writeText(text);
    setSnack(title);
    setTimeout(() => {
      setSnack("");
    }, 4000);
  };

  const onLocation = () => {
    window.open(mapLink, "_blank");
  };

  return (
    <div className="info-container">
      <div className="box location">
        <img src={location} alt="location" />
        <div className="nested">
          <a href={mapLink} onClick={onLocation}>
            Darbar Location
          </a>
          <img
            onClick={() => onCopy("Map Link", mapLink)}
            src={copy}
            alt="copy phone"
          />
        </div>
      </div>
      <div className="box">
        <img src={phone} alt="phone" />
        <div className="nested">
          <span className="text">{phoneNumber}</span>
          <img
            onClick={() => onCopy("Phone Number", phoneNumber)}
            src={copy}
            alt="copy phone"
          />
        </div>
      </div>
      <div className="box">
        <img src={email} alt="email" />
        <div className="nested">
          <span className="text">{mailId}</span>
          <img
            onClick={() => onCopy("Mail Id", mailId)}
            src={copy}
            alt="copy email"
          />
        </div>
      </div>
      {snack && <div className="snack">{snack} Copied!</div>}
    </div>
  );
}

export default Info;
