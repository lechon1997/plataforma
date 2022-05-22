import React from "react";
import styles from "../css/card_course.module.css"
import { useNavigate } from "react-router-dom";
const CardCourse = () => {
  const navigate = useNavigate()
  const onClickNavigate = () => {
    navigate("/cursos/52798776")
  }

  return <div className={styles.card} onClick={onClickNavigate}>
    <div className={styles.value} ><span>$3500</span></div>
    <div className={styles.image_course}>
    </div>
    <div className={styles.detail_course_content}>
      <h2>Introducción a la programación con C++</h2>
    </div>
  </div>;
};

export default CardCourse;
