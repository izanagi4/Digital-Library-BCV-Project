import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../Footer";
import bookImg from "../images/kategori-buku3.jpg";
import "./books/styles/books.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => {
      if (prevCount === "8") {
        alert("Max book has been reached!");
        window.location.reload();
      } else {
        const newCount = Number(prevCount) + 1;
        localStorage.setItem("count", newCount);
        window.location.reload();
      }
    });
  };

  const decrease = () => {
    setCount((prevCount) => {
      window.location.reload();
      const newCount = Number(prevCount) - 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  useEffect(() => {
    const initialValue = localStorage.getItem("count");
    if (initialValue) setCount(initialValue);
  }, []);

  useEffect(() => {
    document.getElementById("detail").style.display = "none";
  });

  const wish = () => {
    alert("Buku telah ditambahkan ke wishlist!");
    window.location.reload();
  };

  const displayDescription = () => {
    document.getElementById("detail").style.display = "none";
    document.getElementById("description").style.display = "block";
    document.getElementById("desc-button").style.textDecoration = "underline";
    document.getElementById("det-button").style.textDecoration = "none";
  };

  const displayDetail = () => {
    document.getElementById("description").style.display = "none";
    document.getElementById("detail").style.display = "block";
    document.getElementById("det-button").style.textDecoration = "underline";
    document.getElementById("desc-button").style.textDecoration = "none";
  };
  return (
    <div className="kategori-buku-information">
      <Navbar />
      <div className="kategori-buku-information-flexbox">
        <div className="kategori-buku-information-top">
          <img src={bookImg} alt="" />
          <div className="kategori-buku-information-flexcol">
            <div className="kategori-buku-information-top-detail">
              <h1>21 Alasan Kenapa Kita Harus Investasi</h1>
              <h3>Nicky Hogan</h3>
              <h5>14 Desember 2020</h5>
              <h4>
                <b>Jumlah Peminjam : {count}</b>
              </h4>
            </div>
            <div className="kategori-buku-information-top-buttons">
              <button onClick={increase}>Pinjam Sekarang</button>
              <button onClick={decrease}>Batal Pinjam</button>
              <button onClick={wish}>Tambahkan ke wishlist</button>
            </div>
          </div>
        </div>
        <div className="kategori-buku-information-bottom">
          <button id="desc-button" onClick={displayDescription}>
            Deskripsi
          </button>
          <button id="det-button" onClick={displayDetail}>
            Detail
          </button>
          <div id="description">
            <div className="bg-gray">
              <p>
                Jangan pandang remeh hobi! Justru banyak orang yang mendulang
                kesuksesan berbekal hobi. Dahulu mungkin hobi kamu dianggap
                hanya menghabiskan waktu, tetapi sekarang kamu punya kesempatan
                menunjukkan betapa banyak manfaat hobimu. Buku ini akan mengajak
                kamu menyelami bermacam-macam hobi kekinian yang sangat bisa
                mendatangkan cuan sampai menjadi profesi yang membanggakan.
              </p>
            </div>
          </div>

          <div id="detail">
            <div className="bg-gray">
              <p>Jumlah Buku : 8</p>
              <p>Tanggal Terbit : 14 Desember 2020</p>
              <p>Bahasa : Indonesia</p>
              <p>Penerbit : Bhuana Ilmu Populer</p>
              <p>
                Status :{" "}
                {(count == 8 && "Sedang di pinjam") ||
                  (count < 8 && "Tersedia")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Counter;
