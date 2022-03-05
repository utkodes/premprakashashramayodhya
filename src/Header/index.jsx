import React from "react";
import "./index.scss";
import { saiImage } from "../assets";

function Header() {
  return (
    <div className="header-container">
      <img src={saiImage} alt="Swami Teuram Ji" />
      <div className="background-text">ॐ सतनाम साक्षी</div>
    </div>
  );
}

export default Header;
