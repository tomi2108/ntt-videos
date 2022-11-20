const express = require("express");
const { createUser } = require("../controllers/login.controller");
const router = express.Router();


router.post("/",(req,res) => {
  const { email, password } = req.body;
  createUser(email,password)
    .then((userCredentials) => res.status(201).send(userCredentials))
    .catch((err) => res.status(400).send(err));
});


module.exports = router;