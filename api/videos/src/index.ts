import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import videoRouter from "./routes/videos";


const api = express();

const PORT = process.env.VIDEO_PORT || 3001;

api.use(cors());
api.use(express.json());
api.use(fileUpload());
api.use("/api/videos", videoRouter);


api.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});



export default api;