import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../Footer";
import bookImg from "../images/kategori-buku.jpg";
import "./books/styles/books.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => {
      if (prevCount === "15") {
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
              <h1>Thrive</h1>
              <h3>Arianna Huffington</h3>
              <h5>25 Maret 2015</h5>
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
                Apa makna kesuksesan?
                <br />
                <br /> Banyak yang mengukurnya dengan dua hal : kekayaan dan
                kekuasaan. Namun ternyata upaya meraih keduanya menyebabkan
                orang mengorbankan kesehatan dan keharmonisan hidup. Selalu
                terhubung 24 jam tiap hari demi mengejar sukses malah membuat
                kita stres, lelah, sakit, serta putus hubungan dengan dunia
                nyata dan hal-hal yang benar-benar penting. Buku ini mengajak
                kita memaknai ulang kesuksesan yaitu "Metrik Ketiga" yang
                terdiri atas kesejahteraan, kebijaksanaan, ketakjuban, dan
                berderma.
                <br />
                <br />
                Dengan bebagai saran dan wawasan, Arianna Hufflington mengajak
                kita berubah demi kesuksesan pripurna bagi diri kita, tempat
                kerja kita, dan masyarakat. Arianna Hufflington ialah pendiri,
                presiden dan pemimpin redaksi Hufflington Post Media Group,
                salah satu grup media berita dan informasi paling berpengaruh di
                dunia. Arianna salah satu perempuan paling berpengaruh di dunia
                media, tapi kini juga dikenal sebagai pengantuj pembinaan
                kesehatan jiwa-raga.
              </p>
            </div>
          </div>

          <div id="detail">
            <div className="bg-gray">
              <p>Jumlah Buku : 15</p>
              <p>Tanggal Terbit : 25 Maret 2015</p>
              <p>ISBN : 9780753555422</p>
              <p>Bahasa : Indonesia</p>
              <p>Penerbit : Kepustakaan Populer Gramedia</p>
              <p>
                Status :{" "}
                {(count == 15 && "Sedang di pinjam") ||
                  (count < 15 && "Tersedia")}
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
