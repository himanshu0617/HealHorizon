import mongoose from "mongoose";

const connectDB = async () => {
  // Prevent duplicate connections
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Already connected to the database");
    return true;
  }

  // Attach listeners only once
  mongoose.connection.once("connected", () => {
    console.log("✅ Database connected successfully");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("🔁 Database reconnected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("❌ Database connection error:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ Database disconnected");
  });

  const atlasUri = process.env.MONGODB_URI?.trim();
  const fallbackLocalUri = process.env.MONGODB_LOCAL_URI?.trim() || "mongodb://127.0.0.1:27017/HealHorizon";
  const primaryUri = atlasUri || fallbackLocalUri;

  if (!primaryUri) {
    console.warn("⚠️ No MongoDB connection string provided. Running in demo mode.");
    return false;
  }

  const connectWithUri = async (uri) => {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4,
      bufferCommands: false,
      autoIndex: true,
    });
  };

  try {
    await connectWithUri(primaryUri);
    return true;
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);

    if (atlasUri && atlasUri !== fallbackLocalUri) {
      console.warn("⚠️ Atlas connection failed, attempting local MongoDB fallback...");
      try {
        await connectWithUri(fallbackLocalUri);
        return true;
      } catch (fallbackErr) {
        console.error("❌ Local MongoDB fallback also failed:", fallbackErr.message);
        return false;
      }
    }

    return false;
  }
};

export default connectDB;

 