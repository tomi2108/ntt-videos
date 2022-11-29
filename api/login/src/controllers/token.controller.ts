import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../types";
import { toString } from "../utils/parserFunctions";
import { getUserByEmail } from "./login.controller";


export const createToken = (user: User) => {

  const secret = toString(process.env.JWT_SECRET);
  const token = jwt.sign(user, secret, { expiresIn: 60 * 60 * 24 * 7 });
  return token;

};


export const validateToken = async (token: string, email: string) => {

  const secret = toString(process.env.JWT_SECRET);
  await getUserByEmail(email);

  const user = jwt.verify(token, secret) as JwtPayload;
  if (user.email !== email ) throw new Error("Bad token");
  return true;

};