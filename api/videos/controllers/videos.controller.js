const firebase = require("../firebase/config.js");
const uuid = require("uuid");

const uploadVideo = async (video) => {
  const storageRef = firebase.ref(firebase.storage,`videos/${uuid.v4()}`);
  await firebase.uploadBytes(storageRef,video.data);
};



module.exports = { uploadVideo };