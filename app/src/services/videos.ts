import axios from "axios";
import { VideoVisibility } from "../types";
import { videoHost } from "./controller.js";


const videoServiceUrl = `${videoHost}/api/videos`;


export const uploadVideo = async (file: Blob, visibility: VideoVisibility) => {

  const formdata = new FormData();
  formdata.append("video", file);
  formdata.append("visibility", visibility);

  const res = await axios.post(videoServiceUrl, formdata );
  return res.data;

};