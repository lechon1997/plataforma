import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Courses from "../pages/Courses";
import Course from "./Course";
import styles from "../css/content.module.css";

const Content = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/cursos/:id" element={<Course/>} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;
