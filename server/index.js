const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const multer = require("multer");

app.use(cors());
app.use(express.json());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../server-side/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "admin",
  database: "bcvdatabase",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.post("/upload", (req, res) => {
  const namaLengkap = req.body.namaLengkap;
  const univ = req.body.namaLengkap;
  const namaPeneliti = req.body.namaPeneliti;

  db.query(
    "INSERT INTO uploadriset (namaLengkap, univ, namaPeneliti) VALUES (?,?,?)",
    [namaLengkap, univ, namaPeneliti],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send("Values Inserted");
    }
  );
});

app.post("/uploadfile", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/uploadriset", (req, res) => {
  db.query("SELECT * FROM uploadriset", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running server on port 3001");
});
