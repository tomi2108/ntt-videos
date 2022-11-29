
import { createToken, validateToken } from "../../controllers/token.controller";
import { decodeTokenHelper, encodeTokenHelper } from "../helpers/tokens";
import { existingUser, initializeTestDb, newUser } from "../helpers/users";

beforeEach(async () => {

  await initializeTestDb();

});

describe("Login api token controller", () => {

  describe("creating a token", () => {

    test("suceeds with correct data", () => {

      const token = createToken(existingUser);
      expect(typeof token).toStrictEqual("string");

      const decodedToken = decodeTokenHelper(token);

      expect(decodedToken.email).toStrictEqual(existingUser.email);
      expect(decodedToken.password).toStrictEqual(existingUser.password);

    });

  });

  describe("validating a token", () => {

    test("succeeds if token is valid", async () => {

      const token = encodeTokenHelper(existingUser);

      const isValid = await validateToken(token, existingUser.email);
      expect(isValid).toStrictEqual(true);

    });

    test("fails if email is invalid", async () => {

      const token = encodeTokenHelper(existingUser);

      await expect(validateToken(token, "badEmail@email.com")).rejects.toThrowError("User not found");

    });

    test("fails if token is invalid", async () => {

      const token = "badToken";
      await expect(validateToken(token, existingUser.email)).rejects.toThrowError("jwt malformed");

    });

    test("fails if user is non existing", async () => {

      const token = encodeTokenHelper(newUser);
      await expect(validateToken(token, newUser.email)).rejects.toThrowError("User not found");

    });

    test("fails if email user does not match token user", async () => {

      const token = encodeTokenHelper(newUser);
      await expect(validateToken(token, existingUser.email)).rejects.toThrowError("Bad token");

    });

  });

});