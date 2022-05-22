import React from 'react';
import styles from '../css/course_module.module.css'
import { NavLink } from 'react-router-dom';
const Module = ({title, valor}) => {
    return (
        <NavLink to={`/cursos/1234/${title.toLowerCase()}`}>
        <div className={styles.module}>
            <p className={styles.title_module}>{title}</p>
            <p className={styles.value_module}>${valor}</p>
        </div>
        </NavLink>
    );
};

export default Module;