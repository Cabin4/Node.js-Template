const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

// Ping
app.get("/", (req, res) => {
  try {
    res.status(200).send("Ping");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use("/users", require("./controllers/user.controller"));
