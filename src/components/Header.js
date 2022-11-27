import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import Destinationpage from "./Destinationpage";

function onclicks() {
  return <Destinationpage />;
}

function Header(props) {
  return (
    <div className="header-container">
      <img id="logo-image" src={logo} alt="Logo"></img>
      <button id="home-link" onClick={onclicks}>
        00 HOME
      </button>
      <button id="destination-link">01 DESTINATION</button>
      <button id="crew-link">02 CREW</button>
      <button id="tech-link">03 TECHNOLOGY</button>
    </div>
  );
}

export default Header;
