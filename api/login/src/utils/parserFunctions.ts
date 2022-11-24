import { decodedToken, unknownToken, unknownUser, User } from "../types";

const isString = (param: unknown): param is string => typeof param === "string" || param instanceof String;
const isBoolean = (param: unknown): param is boolean => typeof param === "boolean";


export const toBoolean = (param: unknown): boolean => {
  if(!isBoolean(param)) throw new Error(`${param} is not boolean`);
  return param;
};

export const toString = (param: unknown): string  => {
  if(!param || !isString(param)) throw new Error(`${param} is not a string`);
  return param;
};

export const toNewUser = (unknownUser: unknownUser): User => {
  return { email:toString(unknownUser.email), password:toString(unknownUser.password) };
};

export const toDecodedToken = (unknownToken: unknownToken): decodedToken => {
  return { token:toString(unknownToken.token), valid:toBoolean(unknownToken.valid) };
};