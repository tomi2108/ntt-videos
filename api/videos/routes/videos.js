const express = require("express");
const { uploadVideo } = require("../controllers/videos.controller.js");
const router = express.Router();


router.post("/",(req,res) => {
  // TODO: Verify request token with login service
  uploadVideo(req.files.video,req.body.visibility)
    .then((uploadResult) => res.status(201).send({ uploaded:true,visibility:uploadResult.customMetadata.visibility }))
    .catch(() => res.status(408).send({ uploaded:false }));
});


module.exports = router;