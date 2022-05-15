import React from "react";
import styles from "../css/menu_header.module.css";
import { Link } from "react-router-dom";
const MenuHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_arrow_up}>
        <i className={`fa-solid fa-sort-up ${styles.arrow_up}`}></i>
      </div>
      <div className={styles.container_menu_options}>
        <ul className={styles.menu_options}>
          <li>
            <Link to="/">
              <div className={styles.menu_specific_option}>
                <i className="fa-solid fa-house-chimney"></i>
                <p>Inicio</p>
              </div>
            </Link>
          </li>
          <li>
            <div className={styles.menu_specific_option}>
              <i className="fa-solid fa-user"></i>
              <p>Perfil</p>
            </div>
          </li>
          <li>
            <Link to="/cursos">
              <div className={styles.menu_specific_option}>
                <i className="fa-solid fa-graduation-cap"></i>
                <p>Cursos</p>
              </div>
            </Link>
          </li>
          <li>
            <div className={styles.menu_specific_option}>
              <i className="fa-solid fa-laptop-code"></i>
              <p>Actividades</p>
            </div>
          </li>
          <li>
            <div className={styles.menu_specific_option}>
              <i className="fa-solid fa-briefcase"></i>
              <p>Desafíos</p>
            </div>
          </li>
          <li>
            <div className={styles.menu_specific_option}>
              <i className="fa-solid fa-sack-dollar"></i>
              <p>Ganancias</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuHeader;
