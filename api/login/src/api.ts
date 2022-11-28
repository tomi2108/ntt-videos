import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import loginRouter from "./routes/login";

const api = express();

api.use(cors());
api.use(express.json());

api.use("/api/login", loginRouter);


export default api;