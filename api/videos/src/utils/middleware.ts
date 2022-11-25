import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/login";
import { toDecodedToken, toString } from "./parserFunctions";

const getTokenFrom = (req: Request) => {

  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {

    return authorization.substring(7);

  }
  return null;

};

export const tokenExtractor = async (req: Request, res: Response, next: NextFunction) => {

  const token = getTokenFrom(req);
  const email = toString(req.body.email);
  if(!token) {

    res.status(400).send("Missing token");
    return;

  }
  try{

    const decodedToken = toDecodedToken(await verifyToken(token, email));
    req.body.token = decodedToken.token;
    next();

  }catch{

    res.status(401).send("Unauthorized");
    return;

  }

};

