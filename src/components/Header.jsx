import React, { useState } from "react";
import styles from "../css/header.module.css";
import MenuHeader from "./MenuHeader";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const onClickMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={styles.header}>
      <h1 className={styles.titulo}>Mi mejor versión</h1>
      <div className={styles.navbar}>
        <div>
          <div onClick={onClickMenu} className={styles.container_icons}>
            <i className={`fas fa-user-circle fa-xl`}></i>
            <div className={styles.down_arrow}>
              <i className="fa-solid fa-sort-down fa-sm"></i>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>{menu ? <MenuHeader /> : ""}</div>
      </div>
    </div>
  );
};

export default Header;
