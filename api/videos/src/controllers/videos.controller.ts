import { UploadedFile } from "express-fileupload";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../db/config";
import { VideoVisibility } from "../types";

export const uploadVideo = async (video: UploadedFile, visibility: VideoVisibility) => {

  const storageRef = ref(storage, `videos/${v4()}`);
  const uploadResult = await uploadBytes(storageRef, video.data, { customMetadata: { visibility } });
  return uploadResult.metadata;

};

