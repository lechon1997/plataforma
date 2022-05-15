import React from "react";
import styles from "../css/courses_page.module.css"
import CardCourse from "../components/CardCourse";
const Courses = () => {
  return (
    <div className={styles.container}>
      <CardCourse />
    </div>
  );
};

export default Courses;
