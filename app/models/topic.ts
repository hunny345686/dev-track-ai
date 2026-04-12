import mongoose from "mongoose";
const { Schema } = mongoose;
const TopicSchema = new Schema(
  {
    title: String,
    category: String,
    description: String,
    status: {
      type: String,
      enum: ["not_started", "learning", "revised"],
      default: "not_started",
    },
  },
  { timestamps: true },
);
export const TopicModel = mongoose.model("Topic", TopicSchema);
