import { connectToMongoDB } from "@/app/libs/mongodb";
import { TopicModel } from "@/app/models/topic";

// Add new topics
export async function POST(req: Request) {
  await connectToMongoDB();
  try {
    const body = await req.json();
    const topic = await TopicModel.create(body);
    return Response.json({
      massege: "Topic Added Successfully",
      topic,
    });
  } catch (error) {
    console.log(error);
  }
}

// Get All topic

export async function GET() {
  await connectToMongoDB();
  const topic = await TopicModel.find().sort({ createdAt: -1 });
  return Response.json(topic);
}
