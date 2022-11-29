import supertest from "supertest";
import api from "../../api";
import { encodeTokenHelper } from "../helpers/tokens";
import { existingUser, initializeTestDb, newUser } from "../helpers/users";
const app = supertest(api);

beforeEach(async () => {

  await initializeTestDb();

});

const url = "/api/login";

describe("Login api login router", () => {

  describe("registering user with email and password",  () => {

    test("succeeds with valid data", async () => {

      await app
        .post(`${url}/register`)
        .send(newUser)
        .expect(201)
        .expect("Content-Type", /application\/json/);

    });

    test("fails if password is short", async () => {

      const res = await app
        .post(`${url}/register`)
        .send({ ...newUser, password: "1" })
        .expect(400);

      expect(res.body.message).toStrictEqual("Password must be at least 6 characters long");

    });
    test("fails if user already exists", async () => {

      const res = await app
        .post(`${url}/register`)
        .send(existingUser)
        .expect(400);

      expect(res.body.message).toStrictEqual("User already exists");


    });


  });

  describe("validating a token",  () => {

    test("succeeds with valid token", async () => {

      const token = encodeTokenHelper(existingUser);

      const res = await app
        .post(`${url}/token`)
        .send({ token, email: existingUser.email })
        .expect(200);

      expect(res.body.token).toStrictEqual(token);
      expect(res.body.email).toStrictEqual(existingUser.email);
      expect(res.body.valid).toStrictEqual(true);


    });

    test("fails if user is not in db", async () => {

      const token = encodeTokenHelper(newUser);

      const res = await app
        .post(`${url}/token`)
        .send({ token, email: newUser.email })
        .expect(400);

      expect(res.body.message).toStrictEqual("User not found");
      expect(res.body.token).toStrictEqual(token);
      expect(res.body.email).toStrictEqual(newUser.email);
      expect(res.body.valid).toStrictEqual(false);

    });
    test("fails if email user is not token user", async () => {

      const token = encodeTokenHelper(newUser);

      const res = await app
        .post(`${url}/token`)
        .send({ token, email: existingUser.email })
        .expect(400);

      expect(res.body.message).toStrictEqual("Bad token");
      expect(res.body.token).toStrictEqual(token);
      expect(res.body.email).toStrictEqual(existingUser.email);
      expect(res.body.valid).toStrictEqual(false);


    });


  });

});