import React from "react";
import styles from "../css/card_course.module.css"
import { useNavigate } from "react-router-dom";
const CardCourse = () => {
  const navigate = useNavigate()
  const onClickNavigate = () => {
    navigate("/cursos/52798776")
  }

  return <div className={styles.card} onClick={onClickNavigate}>
    <div className={styles.image_course}>

    </div>
    <div className={styles.title_course}>
      <h2>Introducción a la programación</h2>
      <p>Valor: <span>$3500</span></p>
    </div>
  </div>;
};

export default CardCourse;
