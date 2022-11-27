import React from "react";
import Header from "./Header";
import "./Home.css";
import Homebody from "./Homebody";

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <Header />
      </div>
      <div className="home-body">
        <Homebody />
      </div>
    </div>
  );
}

export default Home;
