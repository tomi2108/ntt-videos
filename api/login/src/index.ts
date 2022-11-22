import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import loginRouter from "./routes/login";

const PORT = process.env.LOGIN_PORT || 3002;

const api = express();

api.use(cors());
api.use(express.json());

api.use("/api/login", loginRouter);

api.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});