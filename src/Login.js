import React, { useState } from "react";
import "./styles/login.css";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUsers = () => {
    Axios.post("http://localhost:3001/register", {
      username: username,
      password: password,
    }).then(() => {
      console.log("success");
    });
  };
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
        <button onClick={addUsers}>Register!</button>
      </div>
    </div>
  );
}

export default Login;
