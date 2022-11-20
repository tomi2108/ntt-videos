const express = require("express");
const api = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");


const videoRouter = require("./routes/videos.js");


api.use(cors());
api.use(express.json());
api.use(fileUpload());
api.use("/api/videos", videoRouter);


module.exports = api;