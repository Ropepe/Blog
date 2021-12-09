import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footer__group}>
        <div className={styles.footer__group__cont}>
          <h3>Do you want to get our latest updates?</h3>
          <p>
            Please subscribe our newsletter for upcoming new videos and latest
            information about our work. Thank you.
          </p>
          <div className={styles.email_container}>
            <input
              type="email"
              placeholder="Your email..."
              id="email"
              className={styles.email_field}
            ></input>
            <button type="submit" className={styles.submit_btn}>
              Submit
            </button>
          </div>
        </div>
        <div className={styles.footer__group__cont}>
          <h3>Quick Links</h3>
          <div className={styles.links__container}>
            <ul className={styles.list__bottom}>
              <li>
                <Link to="#">Duis bibendum</Link>
              </li>
              <li>
                <Link to="#">Purus non dignissim</Link>
              </li>
              <li>
                <Link to="#">Sapien metus gravida</Link>
              </li>
              <li>
                <Link to="#">Eget consequat</Link>
              </li>
              <li>
                <Link to="#">Praesent eu pulvinar</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__group__cont}>
          <h3>Our Pages</h3>
          <div className={styles.links__container}>
            <ul className={styles.list__bottom}>
              <li>
                <Link to="#">Our Videos</Link>
              </li>
              <li>
                <Link to="#">License Terms</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Privacy Policies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h5 className={styles.copyright__txt}>
        Copyright 2021 - Pericas Blog - React project
      </h5>
    </div>
  );
};

export default Footer;
