const app = require("./src/app.js")
const express = require("express");
const { conn } = require("./src/db.js");
require("dotenv").config();

const { PORT } = process.env;

conn.sync({ force: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Listening at", PORT);
  });
});

module.exports = app;
