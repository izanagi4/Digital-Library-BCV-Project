import React from "react";
import "./styles/Home.css";
import { NavLink } from "react-router-dom";
import banner from "./images/e-library banner 2.png";
import riset from "./images/carousel-1.jpg";
import catalogue from "./images/carousel-2.jpg";
import hotbooks from "./images/hot-books.svg";
import ebooks from "./images/e-books.svg";
import news from "./images/news.png";
import Navbar from "./component/Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="flexbox-upper-side">
        <div className="upper-side">
          <img src={banner} alt="e-library-banner" />
          <div className="small-img">
            <img src={riset} alt="riset" />
            <img src={catalogue} alt="catalogue" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="card blue">
          <NavLink
            to="/kategori-buku-favorit"
            style={{ textDecoration: "none" }}
          >
            <img src={hotbooks} alt="" />
            <h4>Hot Books!</h4>
          </NavLink>
        </div>

        <div className="card green">
          <NavLink to="/kategori-ebook" style={{ textDecoration: "none" }}>
            <img src={ebooks} alt="" />
            <h4>E-Books!</h4>
          </NavLink>
        </div>
        <div className="card red">
          <NavLink to="/comingsoon" style={{ textDecoration: "none" }}>
            <img src={news} alt="" />
            <h4>Our News!</h4>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
