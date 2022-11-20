import axios from "axios";
import { loginHost } from "services/controller.js";

const url = `${loginHost}/api/login`;


export const register = async (email,password) => {
  try{
    const res = await axios.post(url,{ email,password });
    return res.data;
  }catch(err){
    throw new Error(err);
  }
};