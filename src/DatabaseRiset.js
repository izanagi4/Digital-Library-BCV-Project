import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/DatabaseRiset.css";
import Footer from "./Footer";
import Axios from "axios";
import img from "./images/book.svg";

function DatabaseRiset() {
  const [risetList, setRisetList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/uploadriset").then((response) => {
      setRisetList(response.data);
    });
  }, []);

  return (
    <div className="database-riset">
      <Navbar />
      <div className="database-information">
        {risetList.map((val, key) => {
          return (
            <div className="database-riset-information">
              <img src={img} alt="" />
              <div className="database-riset-description">
                <h3>Nama Lengkap : {val.namaLengkap}</h3>
                <h3>universitas : {val.univ}</h3>
                <h3>Nama Peneliti : {val.namaPeneliti}</h3>
                <a
                  href="https://cdn.discordapp.com/attachments/423724286856134677/781028806038650890/FB_IMG_1598362482997.jpg"
                  target="_blank"
                  download
                >
                  Download
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default DatabaseRiset;
