import Axios from "axios";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Footer";
import "./styles/UploadRiset.css";

function UploadRiset() {
  const [namaLengkap, setNamaLengkap] = useState();
  const [univ, setUniv] = useState();
  const [namaPeneliti, setNamaPeneliti] = useState();

  const addRiset = () => {
    Axios.post("http://bcv-mysql-server.herokuapp.com/upload", {
      namaLengkap: namaLengkap,
      univ: univ,
      namaPeneliti: namaPeneliti,
    }).then(() => {
      alert("Riset added!");
      window.location.reload();
    });
  };

  return (
    <div className="uploadriset-page">
      <Navbar />
      <div className="uploadriset-information">
        <h1>REGISTRASI REPOSITORY BNI</h1>
        <div className="uploadriset-datadiri">
          <label>Nama Lengkap</label>
          <input
            type="text"
            onChange={(event) => {
              setNamaLengkap(event.target.value);
            }}
          />
          <label>Universitas</label>
          <input
            type="text"
            onChange={(event) => {
              setUniv(event.target.value);
            }}
          />
          <label>Nama Penelitian</label>
          <input
            type="text"
            onChange={(event) => {
              setNamaPeneliti(event.target.value);
            }}
          />
        </div>
        <button onClick={addRiset}>Submit</button>
      </div>
      <Footer />
    </div>
  );
}

export default UploadRiset;
