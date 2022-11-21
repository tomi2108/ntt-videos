const { auth,createFirebaseUser,loginFirebaseUser } = require("../firebase/config.js");

const createUser = async (email,password) => {
  const userCredentials = await createFirebaseUser(auth,email,password);
  return userCredentials;
};

const loginUser = async (email,password) => {
  const userData = await loginFirebaseUser(auth,email,password);
  return userData;
};





module.exports = { createUser,loginUser };