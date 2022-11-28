
import { createToken, validateToken } from "../../controllers/token.controller";
import { decodeTokenHelper, encodeTokenHelper } from "../helpers/tokens";
import { existingUser } from "../helpers/users";

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

    test("succeeds if token is valid", () => {

      const token = encodeTokenHelper(existingUser);

      const isValid = validateToken(token, existingUser.email);
      expect(isValid).toStrictEqual(true);

    });

    test("fails if email is invalid", () => {

      const token = encodeTokenHelper(existingUser);

      const isValid = validateToken(token, "badEmail@email.com");
      expect(isValid).toStrictEqual(false);

    });

    test("fails if token is invalid", () => {

      const token = "badToken";
      const isValid = validateToken(token, existingUser.email);
      expect(isValid).toStrictEqual(false);

    });

  });

});