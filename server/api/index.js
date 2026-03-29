import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";
import userRouter from "../routes/userRoute.js";
import doctorRouter from "../routes/doctorRoute.js";
import adminRouter from "../routes/adminRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

// Initialize database and Cloudinary on first request
let isInitialized = false;

const initializeApp = async () => {
  if (!isInitialized) {
    try {
      await connectDB();
      await connectCloudinary();
      isInitialized = true;
      console.log("✅ Database and Cloudinary initialized");
    } catch (err) {
      console.error("❌ Failed to initialize:", err.message);
    }
  }
};

// Routes
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    db: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    uptime: process.uptime(),
  });
});

// Middleware to initialize on first request
app.use(async (req, res, next) => {
  await initializeApp();
  next();
});

// Export for Vercel serverless
export default app;
