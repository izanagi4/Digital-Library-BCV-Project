import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../Footer";
import bookImg from "../images/kategori-buku1.jpg";
import "./books/styles/books.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => {
      if (prevCount === "5") {
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
              <h1>Manajemen Risiko</h1>
              <h3>Leo J Susilo</h3>
              <h5>17 Desember 2018</h5>
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
                Buku ini menjawab dua pertanyaan yang paling sering diajukan
                pada penerapan manajemen risiko, yaitu apa manfaat manajemen
                risiko dan bagaimana mengintegrasikannya dengan sistem manajemen
                lain yang ada di dalam perusahaan. <br />
                <br />
                Manfaat manajemen risiko diuraikan pada bagian prolog, sedangkan
                integrasi manajemen risiko diuraikan pada bagian epilog. <br />
                <br />
                Kedua hal ini juga menjadi sorotan utama perubahan dari ISO
                31000:2009 ke ISO 31000:2018. Manfaat manajemen risiko untuk
                menciptakan dan melindungi nilai berubah dari salah satu prinsip
                menjadi tujuan manajemen risiko. Integrasi ditambahkan secara
                eksplisit sebagai salah satu elemen kerangka kerja manajemen
                risiko.
                <br />
                <br /> Dari kesadaran mengenai manfaat manajemen risiko hingga
                integrasinya dengan sistem manajemen lain, banyak hal yang perlu
                dilakukan organisasi untuk dapat menerapkan manajemen risiko
                secara efektif. Kombinasi jabaran teori dan praktik yang
                diberikan pada buku ini niscaya memberikan panduan yang
                bermanfaat bagi organisasi.
                <br />
                <br /> Buku ini cocok menjadi rujukan penerapan manajemen risiko
                oleh segala jenis organisasi dan oleh semua tingkatan di dalam
                organisasi tersebut. -- Ivan Lanin
              </p>
            </div>
          </div>

          <div id="detail">
            <div className="bg-gray">
              <p>Jumlah Buku : 5</p>
              <p>Tanggal Terbit : 17 Desember 2018</p>
              <p>ISBN : 9786020512341</p>
              <p>Bahasa : Indonesia</p>
              <p>Penerbit : Gramedia Pustaka Utama</p>
              <p>
                Status :{" "}
                {(count == 5 && "Sedang di pinjam") ||
                  (count < 5 && "Tersedia")}
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
