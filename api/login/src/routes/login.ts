import express from "express";
import { createUser, loginUser } from "../controllers/login.controller";
import { validateToken } from "../controllers/token.controller";
import { toNewUser, toString } from "../utils/parserFunctions";
const router = express.Router();


router.post("/register", (req, res) => {
  const newUser = toNewUser(req.body);
  if(newUser.password.length < 6){
    res.status(400).send({ message:"Password must be at least 6 characters long" });
    return;
  }

  createUser(newUser)
    .then((userCredentials) => res.status(201).send(userCredentials))
    .catch(() => res.status(400).send({ message:"User already exists" }));
});

router.post("/token", (req, res) => {
  const token = toString(req.body.token);

  if(validateToken(token)) {
    res.status(200).send({ token, valid:true });
  }else{
    res.status(400).send({ token, valid:false });
  }
});

router.post("/", (req, res) => {
  const user = toNewUser(req.body);

  loginUser(user)
    .then((userCredentials) => res.status(200).send(userCredentials))
    .catch(() => res.status(400).send({ message:"Wrong email or password" }));
});



export default router;