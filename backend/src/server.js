import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";



import { connectDB } from "./lib/db.js";
dotenv.config();
const app = express();



const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;







app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});