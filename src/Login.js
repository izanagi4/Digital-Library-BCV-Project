import React, { useState, useEffect } from "react";
import "./styles/login.css";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: username,
      password: password,
    }).then(() => {
      console.log("success");
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: usernameLogin,
      password: passwordLogin,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      setLoginStatus(response.data.user[0].username);
    });
  }, []);
  return (
    <div className="login-page">
      <div className="register-user">
        <h3>Register now!</h3>
        <input
          placeholder="username"
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={register}>Register!</button>
      </div>
      <div className="login-user">
        <h3>Login now!</h3>
        <input
          placeholder="username"
          type="text"
          onChange={(event) => {
            setUsernameLogin(event.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(event) => {
            setPasswordLogin(event.target.value);
          }}
        />
        <button onClick={login}>Login!</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Login;
