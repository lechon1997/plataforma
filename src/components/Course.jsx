import React from 'react';
import styles from '../css/course.module.css'
import Module from './Module';
import { Outlet} from 'react-router-dom';
const Course = () => {
    return (
        <div className={styles.content}>
           <div className={styles.module_content}>
           <Outlet />
           </div>
           <div className={styles.module_list}>
               <Module title={'Introduccion'} valor={125}/>
               <Module title={'Variables'} valor={100}/>
               <Module title={'Operaciones aritmeticas'} valor={275}/>
               <Module title={'Sentencia IF'} valor={200}/>
               <Module title={'Bucles'} valor={300}/>
           </div>
        </div>
    );
};

export default Course;


export function Mod1(){
    return <div>mod1</div>
}

export function Mod2(){
    return <div>mod2</div>
}