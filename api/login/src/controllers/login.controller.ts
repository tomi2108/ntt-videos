import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/config";
import { createToken } from "./token.controller";


export const createUser = async (email: string, password: string) => {
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  const token = createToken({ email, password });
  return { ...userCredentials, token };
};

export const loginUser = async (email: string, password: string) => {
  const userData = await signInWithEmailAndPassword(auth, email, password);
  const token = createToken({ email, password });
  return { ...userData, token };
};

