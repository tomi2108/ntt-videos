import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../db/config";
import { VideoMetadata } from "../types";

export const uploadVideo = async (video:  File | Blob | Uint8Array, customMetadata: VideoMetadata) => {

  const storageRef = ref(storage, `videos/${v4()}`);
  const uploadResult = await uploadBytes(storageRef, video, { customMetadata: customMetadata });
  return uploadResult.metadata;

};

