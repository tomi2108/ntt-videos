import express from "express";
import { createUser, loginUser } from "../controllers/login.controller";
import { toNewUser } from "../utils/parseFunctions";
const router = express.Router();


router.post("/register", (req, res) => {
  const newUser = toNewUser(req.body);

  createUser(newUser.email, newUser.password)
    .then((userCredentials) => res.status(201).send(userCredentials))
    .catch(() => res.status(400).send({ message:"User already exists" }));
});

router.post("/", (req, res) => {
  const newUser = toNewUser(req.body);

  loginUser(newUser.email, newUser.password)
    .then((userCredentials) => res.status(200).send(userCredentials))
    .catch(() => res.status(400).send({ message:"Wrong email or password" }));
});


export default router;