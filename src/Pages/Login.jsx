import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const NavigateTo = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginData = localStorage.getItem("user");
  const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);

    if (
      user.email === JSON.parse(loginData).email &&
      user.password === JSON.parse(loginData).password
    ) {
      setIsAuth(true);
      NavigateTo("/");
      // alert("Login Successful");
      toast({
        title: 'Success.',
        description: "Login Successful",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } else {
      // alert("Login Failed");
      toast({
        title: 'Failed.',
        description: "Login Failed",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    setUser({
      email: "",
      password: "",
    });
  };

  console.log(user);
  console.log(isAuth);
  return (
    <>
      {isAuth ? (
        <div>
          <h1>Welcome {JSON.parse(loginData).name.toUpperCase()}</h1>
          <button onClick={() => setIsAuth(false)}>Logout</button>
        </div>
      ) : (
        <form action="" onSubmit={handleSubmit} className={styles.signupForm}>
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
          <input type="submit" value="Login" />
        </form>
      )}
    </>
  );
}
