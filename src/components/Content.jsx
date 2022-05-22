import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Courses from "../pages/Courses";
import Course from "./Course";
import styles from "../css/content.module.css";
import { Mod1 } from "./Course";
import { Mod2 } from "./Course";

const Content = () => {
  const rutas = ['mod1','mod2']
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/cursos/:id/" element={<Course/>}>
           <Route path="introduccion" element={<Mod1/>}/>
           <Route path="variables" element={ <Mod2/>}/>
          </Route>
        </Routes>
      </div>
    </main>
  );
};

export default Content;
