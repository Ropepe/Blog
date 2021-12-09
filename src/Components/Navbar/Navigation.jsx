import React from "react";
import ButtonComp from "../ButtonComp/ButtonComp.jsx";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

let links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/contact",
    text: "Contact",
  },
];
const Navigation = () => {
  return (
    // <div className={styles.main}>
    //   <div className={styles.btn}>
    //     <ButtonComp naziv={"Dugme 1"} />
    //   </div>
    //   <div className={styles.btn}>
    //     <ButtonComp naziv={"Dugme 2"} />
    //   </div>
    //   <div className={styles.btn}>
    //     <ButtonComp naziv={"Dugme 3"} />
    //   </div>
    // </div>
    <div className={styles.main}>
      <ul>
        {links.map((link) => {
          if (link.text !== "NotMatch") {
            return (
              <li key={link.id} className={styles.links}>
                <NavLink
                  to={link.path}
                  className={styles.linkovi}
                  activeClassName={styles.active_link}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Navigation;
