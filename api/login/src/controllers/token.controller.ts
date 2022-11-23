import jwt from "jsonwebtoken";
import { User } from "../types";
import { toString } from "../utils/parseFunctions";


export const createToken = (user: User) => {
  const secret = toString(process.env.JWT_SECRET);
  const token = jwt.sign(user, secret, { expiresIn:60 * 60 * 24 * 7 });
  return token;
};


export const validateToken = (token: string): boolean => {
  const secret = toString(process.env.JWT_SECRET);
  try{
    jwt.verify(token, secret);
    return true;
  }catch{
    return false;
  }

};