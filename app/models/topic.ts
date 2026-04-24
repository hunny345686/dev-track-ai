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
  { timestamps: true }
);

TopicSchema.index(
  { title: 1, category: 1 },
  { unique: true }
);

export const TopicModel =
  mongoose.models.Topic ||
  mongoose.model("Topic", TopicSchema);