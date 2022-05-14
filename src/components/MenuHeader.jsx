import React from "react";
import styles from "../css/menu_header.module.css";

const MenuHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_arrow_up}>
        <i className={`fa-solid fa-sort-up ${styles.arrow_up}`}></i>
      </div>
      <navbar>
        <ul className={styles.menu_options}>
          <li>
            <div className={styles.menu_specific_option}>
              <i class="fa-solid fa-user"></i>
              <p>Perfil</p>
            </div>
          </li>
          <li>
            <div className={styles.menu_specific_option}>
              <i class="fa-solid fa-laptop-code"></i>
              <p>Actividades</p>
            </div>
          </li>
          <li>
            <div className={styles.menu_specific_option}>
              <i class="fa-solid fa-sack-dollar"></i>
              <p>Ganancias</p>
            </div>
          </li>
        </ul>
      </navbar>
    </div>
  );
};

export default MenuHeader;
