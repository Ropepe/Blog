import React from "react";
import styles from "./CardContainer.module.css";
import Cards from "../Card/Cards";
const CardContainer = (props) => {
  return (
    <div className={styles.even_col}>
      {props.apiData.map((apiData) => {
        return (
          <div className={styles.col}>
            <Cards apiData={apiData} className={styles.card} />
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
