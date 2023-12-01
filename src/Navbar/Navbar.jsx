import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AuthContext } from "../AuthContext/AuthContextProvider";

export default function Navbar() {
  const data = useRef(localStorage.getItem("user"));
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">Home</Link>
        {
          isAuth?"":
        <Link to="/signup">Sign Up</Link>
        }
        <Link to="/login">
          {isAuth ? JSON.parse(data.current).name.toUpperCase() : "Login"}
        </Link>
        <button onClick={() => setIsAuth(false)}>Logout</button>
      </div>
    </>
  );
}
