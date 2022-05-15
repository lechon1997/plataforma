import React from 'react';
import styles from '../css/course.module.css'
import Module from './Module';
const Course = () => {
    return (
        <div className={styles.content}>
           <div className={styles.module_content}>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/625C-j9DMZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           <div className={styles.module_list}>
               <Module/>
               <Module/>
               <Module/>
               <Module/>
               <Module/>
           </div>
        </div>
    );
};

export default Course;