import mongoose from "mongoose";

const URI: string | undefined = process.env.MONGODB_URI;

export default async function connectToMongoDB() {
  try {
    if (mongoose.connection.readyState !== 1) {
      return;
    }
    return mongoose.connect(URI || "");
  } catch (error) {
    console.log(error);
  }
}
