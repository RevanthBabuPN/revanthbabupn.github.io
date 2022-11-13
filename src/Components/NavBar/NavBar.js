import React from "react";
import MenuItems from "./MenuItems";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles["navbar"]}>
      <nav className={styles["navbar-items"]}>
        {/* <div className={styles["navbar-logo"]}>R</div> */}
        <div className={styles["navbar-logo"]}></div>
        <ul className={styles["nav-menu"]}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={styles["nav-links"]} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={styles["menu-icon"]}></div>
      </nav>
    </header>
  );
};

export default NavBar;
