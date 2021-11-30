import { Card } from "@mui/material";
import React from "react";
import Cards from "../Card/Cards";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Main</h1>
        <div className={styles.cards}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Main;
