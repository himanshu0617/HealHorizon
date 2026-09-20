import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js"

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

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

const startServer = async () => {
  try {
    const dbReady = await connectDB();
    const cloudReady = await connectCloudinary();

    if (!dbReady) {
      console.warn("⚠️ MongoDB unavailable. The app will serve demo data for public pages.");
    }

    if (!cloudReady) {
      console.warn("⚠️ Cloudinary unavailable. Uploaded images will not work until credentials are configured.");
    }

    app.listen(port, () => {
      console.log(`🚀 Server started on PORT:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    app.listen(port, () => {
      console.log(`🚀 Server started in degraded mode on PORT:${port}`);
    });
  }
};

startServer();

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
});
