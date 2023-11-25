import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const NavigatTo = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      user.name === "" ||
      user.email === "" ||
      user.password === ""
    ) {
        alert("Please fill all the fields")
    }else {
        localStorage.setItem("user", JSON.stringify(user));
        NavigatTo("/login")
    }

    
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };
    
  

  console.log(user);
  return (
    <>
      <form action="" onSubmit={handleSubmit} className={styles.signupForm}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          value={user.name}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
}
