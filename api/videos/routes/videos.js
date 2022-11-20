const express = require("express");
const { uploadVideo } = require("../controllers/videos.controller.js");
const router = express.Router();


router.post("/",(req,res) => {
  // TODO: Verify request token with login service
  uploadVideo(req.files.video)
    .then(() => res.status(201).send({ uploaded:true }))
    .catch(() => res.status(408).send({ uploaded:false }));
});

module.exports = router;