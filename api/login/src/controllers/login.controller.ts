import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/config";


export const createUser = async (email: string, password: string) => {
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  return userCredentials;
};

export const loginUser = async (email: string, password: string) => {
  const userData = await signInWithEmailAndPassword(auth, email, password);
  return userData;
};

