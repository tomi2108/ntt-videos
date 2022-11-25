import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../types";
import { toString } from "../utils/parserFunctions";


export const createToken = (user: User) => {

  const secret = toString(process.env.JWT_SECRET);
  const token = jwt.sign(user, secret, { expiresIn: 60 * 60 * 24 * 7 });
  return token;

};


export const validateToken = (token: string, email: string): boolean => {

  const secret = toString(process.env.JWT_SECRET);
  try{

    const user = jwt.verify(token, secret) as JwtPayload;
    return user.email === email;

  }catch{

    return false;

  }

};