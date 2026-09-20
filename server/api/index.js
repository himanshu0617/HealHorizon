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
app.use(cors({
  origin: [
    "https://healhorizon-client.vercel.app",
    "https://healhorizon-admin.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token", "atoken", "dtoken"]
}));

// Initialize database and Cloudinary on first request
let isInitialized = false;

const initializeApp = async () => {
  if (!isInitialized) {
    const dbReady = await connectDB();
    const cloudReady = await connectCloudinary();
    isInitialized = true;

    if (!dbReady) {
      console.warn("⚠️ MongoDB unavailable; public doctor data will use demo fallback.");
    }

    if (!cloudReady) {
      console.warn("⚠️ Cloudinary not configured; image upload features are disabled.");
    }
  }
};

// Middleware to initialize on first request (Must be before routes so that it executes for all endpoints)
app.use(async (req, res, next) => {
  try {
    await initializeApp();
    next();
  } catch (err) {
    console.error("⚠️ Initialization warning:", err.message);
    next();
  }
});

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
    dbName: mongoose.connection.name,
    uptime: process.uptime(),
  });
});

// Export for Vercel serverless
export default app;
