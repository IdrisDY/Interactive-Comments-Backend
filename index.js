const express = require("express");
const app = express();

const mongoose = require("mongoose");
const routes = require("./routes/comments");

require('dotenv').config()

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Started listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/comments", routes);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to the rhythm" });
});
