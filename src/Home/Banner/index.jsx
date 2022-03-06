import React from "react";
import { saiImage } from "../../assets";
import "./index.scss";

function Banner() {
  return (
    <div className="banner-container">
      <img src={saiImage} alt="Swami Teuram Ji" />
      <div className="background-text">ॐ सतनाम साक्षी</div>
    </div>
  );
}

export default Banner;
