import axios, { AxiosError } from "axios";
import { loginHost } from "./controller";

const url = `${loginHost}/api/login`;


export const register = async (email: string, password: string) => {
  try{
    const res = await axios.post(`${url}/register`, { email, password });
    return res.data;
  }catch(err){
    if(err instanceof AxiosError){
      throw new Error(`Request failed: ${err.response?.data.message ?? "No response"}`);
    } else throw err;
  }
};


export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try{
    const res = await axios.post(url, { email, password });
    return res.data;
  }catch(err){
    if(err instanceof AxiosError){
      throw new Error(`Request failed: ${err.response?.data.message ?? "No response"}`);
    } else throw err;
  }
};