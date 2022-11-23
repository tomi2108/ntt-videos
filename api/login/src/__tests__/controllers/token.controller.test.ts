import jwt, { JwtPayload } from "jsonwebtoken";

import { createToken, validateToken } from "../../controllers/token.controller";
import { toString } from "../../utils/parserFunctions";


describe("Login api token controller", () => {

  describe("createToken", () => {
    test("creates token correctly", () => {
      const fakeUser = { email:"fake@gmail.com", password:"1234" };
      const token = createToken(fakeUser);
      expect(typeof token).toStrictEqual("string");

      const secret = toString(process.env.JWT_SECRET);
      const decodedToken = jwt.verify(token, secret) as JwtPayload;

      expect(decodedToken.email).toStrictEqual("fake@gmail.com");
      expect(decodedToken.password).toStrictEqual("1234");

    });
  });

  describe("validateToken", () => {
    test("validates token if its valid", () => {
      const secret = toString(process.env.JWT_SECRET);
      const fakeUser = { email:"fake@gmail.com", password:"1234" };
      const token = jwt.sign(fakeUser, secret, { expiresIn:60 });

      const isValid = validateToken(token);
      expect(isValid).toStrictEqual(true);
    });
    test("does not validate token if its invalid", () => {
      const token = "badToken";

      const isValid = validateToken(token);
      expect(isValid).toStrictEqual(false);
    });
  });
});