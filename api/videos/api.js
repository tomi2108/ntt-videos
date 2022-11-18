const express = require("express");
const api = express();
const cors = require("cors");

const videoRouter = require("./routes/videos.js");


api.use(cors());
api.use(express.json());
api.use("/api/videos", videoRouter);

api.get("/",(req,res) => res.send("Hello World"));


module.exports = api;