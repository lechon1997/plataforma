import React from "react";
import firebaseApp from "./firebase/config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";


function App() {
  const auth = getAuth(firebaseApp)
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <HomePage/> : <LoginPage/> }
    </div>
  );
}

export default App;
