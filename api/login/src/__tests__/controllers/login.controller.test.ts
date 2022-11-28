import { createUser, getUserByEmail, loginUser } from "../../controllers/login.controller";
import { existingUser, initializeTestDb, newUser } from "../helpers/users";


beforeEach(async () => {

  await initializeTestDb();

});


describe("Login api login controller", () => {

  describe("getting a user by email",  () => {

    test("succeeds with existing user", async () => {

      const user = await getUserByEmail(existingUser.email);
      expect(user?.email).toBeTruthy();
      expect(user?.password).toBeTruthy();

    });

    test("fails if user does not exist", async () => {

      await expect(getUserByEmail("nonExistingUser@gmail.com")).rejects.toThrowError("User not found");

    });

  });

  describe("creating a user",  () => {

    test("succeeds with new user", async () => {


      const user = await createUser(newUser);
      expect(user.token).toBeDefined();

    });

    test("fails with existing user", async () => {

      await expect(createUser(existingUser)).rejects.toThrowError("User already exists");

    });

  });

  describe("loggin in a user",  () => {

    test("succeeds with correct password", async () => {

      const user = await loginUser(existingUser);
      expect(user.token).toBeDefined();
      expect(user.email).toStrictEqual(existingUser.email);
      expect(user.password).not.toStrictEqual(existingUser.password);

    });

    test("fails with wrong password", async () => {

      await expect(loginUser({ ...existingUser, password: "wrongPassword" })).rejects.toThrowError("Incorrect email or password");

    });

    test("fails with if user does not exist", async () => {

      await expect(loginUser({ ...existingUser, email: "nonexting@email.com" })).rejects.toThrowError("User not found");

    });

  });

});
