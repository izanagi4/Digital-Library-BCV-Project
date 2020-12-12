import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(`Welcome, ${response.data.user[0].username}`);
      } else {
        setLoginStatus("Login");
      }
    });
  }, []);

  return (
    <div className="Navbar">
      <div className="Navbar-leftside">
        <a href={"/"}>
          <h1 className="Navbar-bcv-logo">
            BCV<i className="fab fa-react"></i>
          </h1>
        </a>
      </div>
      <div className="Navbar-rightside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/catalogue">Catalogue</a>
          <a href="/about">About</a>
          <a href="/riset">Riset</a>
          <a href="/faq">FAQ</a>
          <a href="/login">{loginStatus}</a>
        </div>
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="Navbar-menu-icon"
        >
          {""} <i className={showLinks ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
