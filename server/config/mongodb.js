import mongoose from "mongoose";

const connectDB = async () => {
  // Prevent duplicate connections
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Already connected to the database");
    return;
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
    throw new Error("No MongoDB connection string provided. Set MONGODB_URI or MONGODB_LOCAL_URI.");
  }

  const connectWithUri = async (uri) => {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Fail fast if can't reach server
      socketTimeoutMS: 45000,         // Drop idle sockets
      family: 4,                      // Use IPv4 (faster DNS)
    });
  };

  try {
    await connectWithUri(primaryUri);
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);

    if (atlasUri && atlasUri !== fallbackLocalUri) {
      console.warn("⚠️ Atlas connection failed, attempting local MongoDB fallback...");
      try {
        await connectWithUri(fallbackLocalUri);
      } catch (fallbackErr) {
        throw new Error(`Atlas connection failed (${err.message}) and local MongoDB fallback also failed (${fallbackErr.message})`);
      }
    } else {
      throw err;
    }
  }
};

export default connectDB;

 