const { auth,createFirebaseUser } = require("../firebase/config.js");

const createUser = async (email,password) => {
  const userCredentials = await createFirebaseUser(auth,email,password);
  return userCredentials;
};







module.exports = { createUser };