import { connectToMongoDB } from "@/app/libs/mongodb";
import { TopicModel } from "@/app/models/topic";
import { Agent, run, tool } from "@openai/agents";
import { z } from "zod";

export async function POST(req: Request) {
  const { topic } = await req.json();

  if (!topic || topic.length > 50) {
    return Response.json({ error: "Invalid topic" }, { status: 400 });
  }
  await connectToMongoDB();
  const createTopic = tool({
    name: "create_topics",
    description:
      "Generate a structured learning topics,It will genrate proper object",
    parameters: z.object({
      topics: z.array(
        z.object({
          title: z.string().min(2),
          category: z.string().min(2),
          description: z.string().min(5)
        }),
      ),
    }),
    async execute(input) {
      await TopicModel.insertMany(input.topics, {
        ordered: false
      });
      return {
        msg: "Topic are Created"
      }
    },
  });

  const topicGenrator = new Agent({
    name: "Topic Genrator",
    instructions: `
    You are an expert software architect and educator.
    
    Your task is to generate a COMPLETE learning roadmap for a given technology.
    
    Rules:
    - Always return an ARRAY of topics (minimum 15, maximum 30)
    - Cover all levels: beginner, intermediate, advanced
    - Ensure topics are logically ordered (foundations → advanced → optimization → ecosystem)
    - Avoid duplicate or overlapping topics
    - Keep titles concise and industry-relevant
    - Descriptions must be short (1–2 lines) and practical
    
    Each topic MUST follow this structure:
    {
      "title": string,
      "category": string,
      "description": string
    }
    
    Category should match the user input (e.g., "React", "Next.js", "Node.js")
    
    Do NOT return anything except a valid JSON array.
    No explanations, no extra text.
    Return data using tool create_topics
    with this structure:
    {
      "topics": [ {
    title: 'title',
    category: 'category',
    description: 'small Descriptin'
  }]
    }
    `,
    tools: [createTopic],
  });

  const result = await run(topicGenrator, topic);

  return Response.json({
    success: true,
    message: "Topics generated"
  });

}
