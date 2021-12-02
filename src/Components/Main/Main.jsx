import React, { props, useState } from "react";
import Cards from "../Card/Cards";
import PaginationComp from "../Pagination/PaginationComp";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

const categorie = [
  {
    id: 1,
    links: "",
    text: "All",
  },
  {
    id: 1,
    links: "",
    text: "Drone shoots",
  },
  {
    id: 2,
    links: "",
    text: "Nature",
  },
  {
    id: 3,
    links: "",
    text: "Actions",
  },
  {
    id: 4,
    links: "",
    text: "Featured",
  },
];

const Main = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>News</h1>
        <div className={styles.sections__group}>
          <div className={styles.categorie__titles}>Categories:</div>
          <div className={styles.categorie__list}>
            <ul className={styles.links}>
              {categorie.map((categories) => {
                return (
                  <li key={categories.id}>
                    <Link
                      to="/"
                      className={styles.linkovi}
                      activeClassName={styles.active_link}
                    >
                      {" "}
                      {categories.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Kartice */}
        <div className={styles.even_col}>
          {props.apiData.map((apiData) => {
            return (
              <div className={styles.col}>
                <Cards apiData={apiData} className={styles.card} />
              </div>
            );
          })}
        </div>
        {/* Kraj Kartica */
        /* ------------ */
        /* Paginacija */}
        <div className={styles.pagination}>
          <PaginationComp />
        </div>
      </div>
    </div>
  );
};

export default Main;
