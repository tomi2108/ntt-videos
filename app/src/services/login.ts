import axios from "axios";
import { loginHost } from "./controller";

const url = `${loginHost}/api/login`;


export const register = async (email: string, password: string) => {
  const res = await axios.post(`${url}/register`, { email, password });
  return res.data;
};


export const loginWithEmailAndPassword = async (email: string, password: string) => {
  const res = await axios.post(url, { email, password });
  return res.data;
};