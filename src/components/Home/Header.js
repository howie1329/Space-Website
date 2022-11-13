import React from "react";
import logo from "./assets/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header(props) {
  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="header-container"
    >
      <Link id="logo-image" to="/">
        <img src={logo} alt="Logo"></img>
      </Link>
      <Link id="home-link" to="/">
        00 HOME
      </Link>
      <Link id="destination-link" to="/destination">
        {" "}
        01 DESTINATION{" "}
      </Link>
      <Link id="crew-link" to="/crew">
        {" "}
        02 CREW{" "}
      </Link>
      <Link id="tech-link" to="/technology">
        03 TECHNOLOGY
      </Link>
    </motion.div>
  );
}

export default Header;
