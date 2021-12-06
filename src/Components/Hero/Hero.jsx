import React from "react";
import styles from "./Hero.module.css";
import Banner from "./Images/Banner.jpeg";
import sample from "./sample.mp4";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.main}>
      <video className={styles.videoTag} autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <h1 className={styles.title}>
        Video Catalog is brought to you by TemplateMo. <br />
        This is a full-width video banner.
      </h1>
      <div className={styles.content}>
        <Link className={styles.dugmic}>discovery</Link>
      </div>
    </div>
  );
};

export default Hero;
