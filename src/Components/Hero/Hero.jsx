import React from "react";
import styles from "./Hero.module.css";
import Banner from "./Images/Banner.jpeg";
import sample from "./sample.mp4";

const Hero = () => {
  return (
    <div className={styles.main}>
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      ;
    </div>
  );
};

export default Hero;
