import jwt, { JwtPayload } from "jsonwebtoken";

import { createToken, validateToken } from "../../controllers/token.controller";
import { toString } from "../../utils/parserFunctions";

const fakeUser = { email: "fake@gmail.com", password: "1234" };

describe("Login api token controller", () => {

  describe("creating a token", () => {

    test("suceeds with correct data", () => {

      const token = createToken(fakeUser);
      expect(typeof token).toStrictEqual("string");

      const secret = toString(process.env.JWT_SECRET);
      const decodedToken = jwt.verify(token, secret) as JwtPayload;

      expect(decodedToken.email).toStrictEqual("fake@gmail.com");
      expect(decodedToken.password).toStrictEqual("1234");

    });

  });

  describe("validating a token", () => {

    test("succeeds if token is valid", () => {

      const secret = toString(process.env.JWT_SECRET);
      const token = jwt.sign(fakeUser, secret, { expiresIn: 60 });

      const isValid = validateToken(token, fakeUser.email);
      expect(isValid).toStrictEqual(true);

    });

    test("fails if email is invalid", () => {

      const secret = toString(process.env.JWT_SECRET);
      const token = jwt.sign(fakeUser, secret, { expiresIn: 60 });

      const isValid = validateToken(token, "badEmail@email.com");
      expect(isValid).toStrictEqual(false);

    });

    test("fails if token is invalid", () => {

      const token = "badToken";
      const isValid = validateToken(token, fakeUser.email);
      expect(isValid).toStrictEqual(false);

    });

  });

});