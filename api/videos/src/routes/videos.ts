import express from "express";
import { uploadVideo } from "../controllers/videos.controller";
const router = express.Router();


router.post("/", (req, res) => {
  if(!req.files?.video) {
    res.status(400).send({ message:"Missing file" });
    return;
  }
  if (req.files.video instanceof Array) {
    res.status(400).send({ message:"Too many files" });
    return;
  }
  // TODO: Verify request token with login service
  uploadVideo(req.files.video, req.body.visibility)
    .then((uploadResult) => res.status(201).send({ uploaded:true, visibility:uploadResult.customMetadata?.visibility }))
    .catch(() =>  res.status(408).send({ uploaded:false }));
});


export default router;