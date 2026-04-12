// import { connectToMongoDB } from "@/app/libs/mongodb";
import { Agent, run, tool } from "@openai/agents";
import { z } from "zod";

export async function POST(req: Request) {
  const { topic } = await req.json();

  const createTopic = tool({
    name: "create_topics",
    description:
      "Generate a structured learning topics,It will genrate proper object",
    parameters: z.object({
      topics: z.array(
        z.object({
          title: z.string(),
          category: z.string(),
          description: z.string(),
        }),
      ),
    }),
    async execute(input) {
      console.log("tool Colling", input);
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
    `,
    tools: [createTopic],
  });

  const result = await run(topicGenrator, topic);

  console.log("Result output", result.finalOutput);

  //   await connectToMongoDB();
}
