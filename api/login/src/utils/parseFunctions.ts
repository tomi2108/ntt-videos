import { User } from "../types";


type unknownUser = { email: unknown, password: unknown };

const isString = (param: unknown): param is string => typeof param === "string" || param instanceof String;

export const toString = (param: unknown): string  => {
  if(!param || !isString(param)) throw new Error(`${param} is not a string`);
  return param;
};

export const toNewUser = ({ email, password }: unknownUser): User => {
  return { email:toString(email), password:toString(password) };
};