import bcrypt from "bcrypt";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { store } from "../db/config";
import { User } from "../types";
import { createToken } from "./token.controller";

export const getUserByEmail = async (email: string) => {
  const userQuery = query(collection(store, "users"), where("email", "==", email));
  const snapshot = await getDocs(userQuery);
  if(snapshot.docs.length === 0) throw new Error("User not found");

  const user = snapshot.docs[0];
  return user.data() as User;
};


export const createUser = async (user: User) => {
  let token: string | null = null;
  try{
    const existingUser = await getUserByEmail(user.email);
    if(existingUser) throw new Error("User already exists");

  } catch(err){
    if(err instanceof Error && err.message === "User not found"){

      const encryptedUser = { ...user, password:await bcrypt.hash(user.password, 10) };
      await addDoc(collection(store, "users"), encryptedUser);
      token = createToken(encryptedUser);

    }else throw err;
  }
  return { ...user, token };
};


export const loginUser = async (user: User) => {

  const userData = await getUserByEmail(user.email);

  if(await bcrypt.compare(user.password, userData.password)){
    const token = createToken(user);
    return { ...userData, token };
  }else throw new Error("Incorrect email or password");
};

