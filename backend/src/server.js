import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

import cors from "cors";
dotenv.config();

const app = express();
const PORT = ENV.PORT || 3000;
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);




const __dirname = path.resolve();


app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});