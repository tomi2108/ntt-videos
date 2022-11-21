import axios from "axios";
import { videoHost } from "services/controller.js";

const videoServiceUrl = `${videoHost}/api/videos`;


export const uploadVideo = async (file,visibility) => {
  try{
    // eslint-disable-next-line no-undef
    const formdata = new FormData();
    formdata.append("video",file);
    formdata.append("visibility",visibility);
    const res = await axios.post(videoServiceUrl,formdata);
    return res.data;
  }catch(err){
    throw new Error("Unable to upload");
  }
};