import React from "react";
import "./styles/About.css";
import Navbar from './components/Navbar/Navbar';
import Footer from './Footer';

function About() {
  return (
      <div>
      <Navbar />
      <div className="about-container">
        <h1>About E-Library</h1>
        <p>
          E-Library merupakan media Digital perpustakaan yang di kelola oleh BNI
          Corporate University bertujuan untuk memudahkan setiap pegawai yang
          ingin mengakses buku-buku yang tersedia di Perpustakaan BNI Corporate
          University dengan mudah. Untuk Selengkapnya dapat klik video dibawah.
        </p>
      </div>
      <div className="video">
        <a href="https://www.youtube.com/watch?v=wZ1sOoFClFs">
          <button>Watch the video on youtube!</button>
        </a>
        <iframe width="1080" height="720" src="https://www.youtube.com/embed/wZ1sOoFClFs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default About;
