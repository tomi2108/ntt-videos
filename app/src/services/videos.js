import axios from "axios";
import { host } from "services/controller.js";

const url = `${host}/api/videos`;


export const uploadVideo = async (file) => {
  try{
    // eslint-disable-next-line no-undef
    const formdata = new FormData();
    formdata.append("video",file);
    const res = await axios.post(url,formdata);
    return res.data;
  }catch(err){
    throw new Error(err);
  }

};