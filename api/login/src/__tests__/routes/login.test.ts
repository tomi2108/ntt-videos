import supertest from "supertest";
import api from "../../api";
import { existingUser, initializeTestDb, newUser } from "../helpers/users";
const app = supertest(api);

beforeEach(async () => {

  await initializeTestDb();

});



describe("Login api login router", () => {

  describe("registering user with email and password",  () => {

    test("succeeds with valid data", async () => {

      await app
        .post("/api/login/register")
        .send(newUser)
        .expect(201)
        .expect("Content-Type", /application\/json/);

    });

    test("fails if password is short", async () => {

      const res = await app
        .post("/api/login/register")
        .send({ ...newUser, password: "1" })
        .expect(400);

      expect(res.body.message).toStrictEqual("Password must be at least 6 characters long");

    });
    test("fails if user already exists", async () => {

      const res = await app
        .post("/api/login/register")
        .send(existingUser)
        .expect(400);

      expect(res.body.message).toStrictEqual("User already exists");


    });


  });

});