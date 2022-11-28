import bcrypt from "bcrypt";
import { addDoc, collection, deleteDoc, getDocs, query } from "firebase/firestore";
import { store } from "../../db/config";

export const existingUser = { email: "fake@email.com", password: "superSecretPassword" };
export const newUser = { email: "anotherUser@email.com", password: "12345912" };

export async function initializeTestDb () {

  const q = query(collection(store, "users"));
  const snapshot = await getDocs(q);

  const promises = snapshot.docs.map(async (doc) => await deleteDoc(doc.ref));
  await Promise.all(promises);

  const encryptedFakeUser = { ...existingUser, password: await generateHashedPassword(existingUser.password) };
  await addDoc(collection(store, "users"), encryptedFakeUser );

}

export async function generateHashedPassword(password: string){

  return await bcrypt.hash(password, 10);

}