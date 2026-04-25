import { connectToMongoDB } from "@/app/libs/mongodb";
import { TopicModel } from "@/app/models/topic";

// Get All topic

export async function GET() {
  await connectToMongoDB();
  const topic = await TopicModel.find().sort({ createdAt: -1 });
  return Response.json(topic);
}
