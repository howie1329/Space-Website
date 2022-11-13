import React from "react";
import "./Homebody.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Homebody() {
  return (
    <div className="body-container">
      <motion.p
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75 }}
        id="body-text"
      >
        <span id="space-top-text">So, you want to travel to</span>
        <br />
        <span id="space-text">Space</span>
        <br />
        <span id="space-body-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </span>
      </motion.p>

      <Link id="explore-button" to="./destination">
        <motion.button
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75 }}
          whileHover={{ scale: 1.25 }}
          id="explore-button"
        >
          EXPLORE
        </motion.button>
      </Link>
    </div>
  );
}

export default Homebody;
