import React, { useState } from "react";
import styles from "../css/header.module.css";
import { useNavigate } from "react-router-dom";
import MenuHeader from "./MenuHeader";

const Header = () => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState(true);

  const onClickMenu = () => {
    setMenu(!menu);
  };

  const onClickNavigate = () => {
    navigate("/")
  }
  return (
    <div className={styles.header}>
      <h1 className={styles.titulo} onClick={onClickNavigate}>Mi mejor versión</h1>
      
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
