import { useState } from "react";
import { uploadVideo } from "../../services/videos";
import { VideoVisibility } from "../../types";


const VideoForm = () => {

  const [video, setVideo] = useState<File>();
  const [videoVisibility, setVideoVisibility] = useState<VideoVisibility>("public");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const files = e.target.files;
    if(!files) throw new Error("Missing file");

    if(files.length > 1) throw new Error("Too many files");
    if(files.length === 0) throw new Error("Upload a video to send");

    const file = files[0];
    if(!file.type.startsWith("video")) throw new Error("File must be a video");

    setVideo(file);

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if(!video) throw new Error("Missing File");
    // TODO: Show video loading spinner in UI
    uploadVideo(video, videoVisibility).then((data) => {

      if(data.uploaded){
        // TODO: Show uploaded video in ui
      }else{
        // TODO: Show video not uploaded in ui
      }
      // TODO: Stop loading spinner

    }).catch(() => {
      // TODO: Show request failed to send error
    });

  };

  const handleVisibilityChange = () => {

    setVideoVisibility((prev) => prev === "public" ? "private" : "public");

  };

  //TODO: Style visibilty toggle
  return (
    <div>
      <form id="video-upload-form" action="submit" onSubmit={handleSubmit}>
        <input type="file" name="video" id="video" onChange={handleChange} />
        <button type="submit">Upload video</button>
      </form>
      <button onClick={handleVisibilityChange}>Toggle visibility</button>
    </div>
  );

};

export default VideoForm;