import bcrypt from "bcrypt";
import { addDoc, collection, deleteDoc, getDocs, query } from "firebase/firestore";
import { createUser, getUserByEmail, loginUser } from "../../controllers/login.controller";
import { store } from "../../db/config";

const fakeUser = { email: "fake@email.com", password: "superSecretPassword" };


beforeAll(async () => {

  const q = query(collection(store, "users"));
  const snapshot = await getDocs(q);

  const promises = snapshot.docs.map(async (doc) => await deleteDoc(doc.ref));

  await Promise.all(promises);

  const userCollection = collection(store, "users");
  const encryptedFakeUser = { ...fakeUser, password: await bcrypt.hash(fakeUser.password, 10) };
  await addDoc(userCollection, encryptedFakeUser );

});


describe("Login api login controller", () => {

  describe("getting a user by email",  () => {

    test("succeeds with existing user", async () => {

      const user = await getUserByEmail(fakeUser.email);
      expect(user?.email).toBeTruthy();
      expect(user?.password).toBeTruthy();

    });

    test("fails if user does not exist", async () => {

      await expect(getUserByEmail("nonExistingUser@gmail.com")).rejects.toThrowError("User not found");

    });

  });

  describe("creating a user",  () => {

    test("succeeds with new user", async () => {

      const anotherFakeUser = { email: "anotherUser@email.com", password: "12345912" };
      const user = await createUser(anotherFakeUser);
      expect(user.token).toBeDefined();

    });

    test("fails with existing user", async () => {

      await expect(createUser(fakeUser)).rejects.toThrowError("User already exists");

    });

  });

  describe("loggin in a user",  () => {

    test("succeeds with correct password", async () => {

      const user = await loginUser(fakeUser);
      expect(user.token).toBeDefined();
      expect(user.email).toStrictEqual(fakeUser.email);
      expect(user.password).not.toStrictEqual(fakeUser.password);

    });

    test("fails with wrong password", async () => {

      await expect(loginUser({ ...fakeUser, password: "wrongPassword" })).rejects.toThrowError("Incorrect email or password");

    });

    test("fails with if user does not exist", async () => {

      await expect(loginUser({ ...fakeUser, email: "nonexting@email.com" })).rejects.toThrowError("User not found");

    });

  });

});
