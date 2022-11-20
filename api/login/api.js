const express = require("express");
const api = express();
const cors = require("cors");

const loginRouter = require("./routes/login.js");


api.use(cors());
api.use(express.json());

api.use("/api/login", loginRouter);


module.exports = api;