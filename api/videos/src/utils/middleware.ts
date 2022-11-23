import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/login";
import { toDecodedToken } from "./parseFunctions";

const getTokenFrom = (request: Request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

export const tokenExtractor = async (request: Request, res: Response, next: NextFunction) => {
  const token = getTokenFrom(request);
  if(!token) {
    res.status(400).send("Missing token");
    return;
  }
  try{
    const decodedToken = toDecodedToken(await verifyToken(token));
    request.body.token = decodedToken.token;
    next();
  }catch{
    res.status(401).send("Unauthorized");
    return;
  }
};

