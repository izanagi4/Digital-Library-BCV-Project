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
      <div className="facility-container">
      <div className="description-facility">
        <h1>Fasilitas</h1>
        <div className="traits">
          <ul>
            <li>
              <a className="circle" href="#"><i className="fas fa-tv"></i></a>
              PC
            </li>
            <li>
              <a className="circle" href="#"><i className="fas fa-wifi"></i></a>Internet
              & Intranet
            </li>
            <li>
              <a className="circle" href="#"><i className="fas fa-print"></i></a>Print &
              Fotocopy
            </li>
            <li>
              <a className="circle" href="#"><i className="far fa-handshake"></i></a>
              Fasilitas Meeting
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="services-container">
      <div className="description-services">
        <h1>Pelayanan Kami</h1>
        <p>
          Perpustakaan BNI Corporate University kami melayani peminjaman buku,
          Akses Internet dan Intranet, Print. Serta melayani kebutuhan riset
          mahasiswa S1 dan S3.
        </p>
        <button>Details</button>
      </div>
    </div>
    <div className="misc-container">
      <div className="description-misc">
        <p>
          BNI Corporate University akan selalu melakukan perbaikan tanpa henti
          serta peningkatan untuk lebih baik. E-Library hadir untuk memudahkan
          segala kebutuhan literatur untuk internal pegawai BNI serta mahasiswa
          S1 dan S3 melakukan penelitian.
        </p>
      </div>
      <div className="card-container">
        <div className="card-about">
          <h1>(img here)</h1>
          <h1>Contacts</h1>
          <small
            >Pengunjung dapat menghubungi admin e-library apabila tidak
            menemukan solusi atas permasalahan pada e-library
            </small>
        </div>
        <div className="card-about">
          <h1>(img here)</h1>
          <h1>Download</h1>
          <small
            >Pengunjung dapat mendownload SOP Juklak & Juknis peminjaman dan
            Pengembalian buku, Riset dan lainnya.
            </small>
        </div>
        <div className="card-about">
          <h1>(img here)</h1>
          <h1>Locater</h1>
          <small
            >Pengunjung dapat mengetahui Lokasi perpustakaan BNI, serta petunjuk
            untuk mengetahui lokasi buku berada.
            </small>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default About;
