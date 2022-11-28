import express from "express";
import { uploadVideo } from "../controllers/videos.controller";
import { tokenExtractor } from "../utils/middleware";
const router = express.Router();


router.post("/", tokenExtractor, (req, res) => {

  if(!req.files?.video) {

    res.status(400).send({ message: "Missing file" });
    return;

  }

  if (req.files.video instanceof Array) {

    res.status(400).send({ message: "Too many files" });
    return;

  }

  uploadVideo(req.files.video.data, req.body.visibility)
    .then((uploadResult) => res.status(201).send({ uploaded: true, visibility: uploadResult.customMetadata?.visibility }))
    .catch(() =>  res.status(408).send({ uploaded: false }));

});


export default router;