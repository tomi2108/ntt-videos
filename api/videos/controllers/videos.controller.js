const firebase = require("../firebase/config.js");
const uuid = require("uuid");

const uploadVideo = async (video,visibility) => {
  const storageRef = firebase.ref(firebase.storage,`videos/${uuid.v4()}`);
  const uploadResult = await firebase.uploadBytes(storageRef,video.data,{ customMetadata:{ visibility } });
  return uploadResult.metadata;
};



module.exports = { uploadVideo };