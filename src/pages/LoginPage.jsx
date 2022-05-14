import React from "react";
import styles from "../css/login.module.css";
import firebaseApp from "../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

const LoginPage = () => {
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      console.log("contraseña corta");
      return false;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log("error al ingresar");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitForm}>
        <div className={styles.column}>
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.column}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" />
        </div>
        <input type="submit" value="Ingresar" />
      </form>
    </div>
  );
};

export default LoginPage;
