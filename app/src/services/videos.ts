import axios, { AxiosError } from "axios";
import { VideoVisibility } from "../types";
import { videoHost } from "./controller.js";


const videoServiceUrl = `${videoHost}/api/videos`;


export const uploadVideo = async (file: Blob, visibility: VideoVisibility) => {
  try{
    const formdata = new FormData();
    formdata.append("video", file);
    formdata.append("visibility", visibility);
    const res = await axios.post(videoServiceUrl, formdata);
    return res.data;
  }catch(err){
    if(err instanceof AxiosError){
      throw new Error(err.response?.data.message);
    } else throw err;
  }
};