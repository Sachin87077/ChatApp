import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const __dirname = path.resolve();
const PORT = ENV.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});