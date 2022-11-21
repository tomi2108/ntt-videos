const express = require("express");
const { createUser, loginUser } = require("../controllers/login.controller");
const router = express.Router();


router.post("/register",(req,res) => {
  const { email, password } = req.body;
  createUser(email,password)
    .then((userCredentials) => res.status(201).send(userCredentials))
    .catch(() => res.status(400).send({ message:"User already exists" }));
});

router.post("/",(req,res) => {
  const { email,password } = req.body;
  loginUser(email,password)
    .then((userCredentials) => res.status(200).send(userCredentials))
    .catch(() => res.status(400).send({ message:"Wrong email or password" }));
});


module.exports = router;