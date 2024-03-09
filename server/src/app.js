const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mainRouter = require("./routes/mainRouter");
require("dotenv").config();

const app = express();

const { DEPLOY_FRONT } = process.env;
const corsOptions = {
  origin: [DEPLOY_FRONT],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", DEPLOY_FRONT); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", mainRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal app Error";
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
