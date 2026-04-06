import connectToMongoDB from "@/app/libs/mongodb";
import { TopicModel } from "@/app/models/topic";

export async function GET(_: Request, { params }: any) {
  await connectToMongoDB();

  const topic = await TopicModel.findById(params.id);

  return Response.json(topic);
}
