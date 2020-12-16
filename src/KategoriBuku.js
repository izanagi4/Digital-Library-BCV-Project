import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "./component/Navbar";
import Footer from "./Footer";
import img from "./images/kategori-buku ex.jpg";
import "./styles/KategoriBuku.css";

function KategoriBuku() {
  const [kategoriList, setKategoriList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/kategoribuku").then((response) => {
      setKategoriList(response.data);
    });
  }, []);

  return (
    <div className="kategori-buku">
      <Navbar />
      <div className="kategori-buku-flexbox">
        <div className="kategori-buku-leftside">
          <h1>Kategori Buku</h1>
          <h2>Tahun</h2>
          <h2>Manajemen</h2>
          <h2>Akuntansi</h2>
          <h2>Perbankan</h2>
          <h2>Sosial & Politik</h2>
        </div>
        <div className="kategori-buku-rightside">
          {kategoriList.map((val, key) => {
            return (
              <div className="kategori-buku-card">
                <a href={`/${val.link}`}>
                  <img src={img} alt="booked" />
                  <h4>{val.judul_buku}</h4>
                  <h5>
                    {val.tahun_buku} <br /> {val.penerbit}
                  </h5>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KategoriBuku;
