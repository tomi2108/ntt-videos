import axios from "axios";
import { loginHost } from "./controller";


const url = `${loginHost}/api/login`;


export const verifyToken = async (token: string, email: string) => {

  const res = await axios.post(`${url}/token`, { token, email });
  return res.data;

};
