const express = require("express");
const bodyParser = require("body-parser");

const v1Routes = require("./routes/v1");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", v1Routes);

module.exports = app;
