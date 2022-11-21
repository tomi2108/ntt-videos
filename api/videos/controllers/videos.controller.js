const { storage, ref, uploadBytes } = require("../firebase/config.js");
const uuid = require("uuid");

const uploadVideo = async (video,visibility) => {
  const storageRef = ref(storage,`videos/${uuid.v4()}`);
  const uploadResult = await uploadBytes(storageRef,video.data,{ customMetadata:{ visibility } });
  return uploadResult.metadata;
};


module.exports = { uploadVideo };