import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  console.log(process.env.MONGODB_URI);
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB error:", err);
    throw err;
  }
};
