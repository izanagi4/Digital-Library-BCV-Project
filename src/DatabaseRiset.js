import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/DatabaseRiset.css";
import Footer from "./Footer";
import Axios from "axios";
import img from "./images/book.svg";

function DatabaseRiset() {
  const [risetList, setRisetList] = useState([]);

  useEffect(() => {
    Axios.get("https://bcv-mysql-server.herokuapp.com/uploadriset").then(
      (response) => {
        setRisetList(response.data);
      }
    );
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
                <h3>{val.namaPeneliti}</h3>
                <h4>Nama Peneliti : {val.namaLengkap}</h4>
                <h4>Universitas : {val.univ}</h4>
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
