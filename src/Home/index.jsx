import React from "react";
import Banner from "./Banner";
import "./index.scss";
import Info from "./Info";

function Home() {
  return (
    <div className="home-container">
      <Banner />
      <div className="content">
        <div className="desc">
          This is the official page of Prem Prakash Ashram Ayodhya
        </div>
        <Info />
      </div>
    </div>
  );
}

export default Home;
