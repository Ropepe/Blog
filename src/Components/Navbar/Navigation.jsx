import React from "react";
import ButtonComp from "../ButtonComp/ButtonComp.jsx";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.main}>
      <div className={styles.btn}>
        <ButtonComp naziv={"Dugme 1"} />
      </div>
      <div className={styles.btn}>
        <ButtonComp naziv={"Dugme 2"} />
      </div>
      <div className={styles.btn}>
        <ButtonComp naziv={"Dugme 3"} />
      </div>
    </div>
  );
};

export default Navigation;
