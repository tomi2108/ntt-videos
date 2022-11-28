import jwt, { JwtPayload } from "jsonwebtoken";
import { toString } from "../../utils/parserFunctions";

const secret = toString(process.env.JWT_SECRET);

export function decodeTokenHelper(token: string){

  return jwt.verify(token, secret) as JwtPayload;

}

export function encodeTokenHelper(payload: string | object ){


  return jwt.sign(payload, secret, { expiresIn: 60 });

}