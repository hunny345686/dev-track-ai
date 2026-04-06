"use client";

import { askAI } from "@/app/libs/api";
import { useEffect, useState } from "react";

export default function TopicDetail({ params }: any) {
  const [topic, setTopic] = useState<any>(null);
  const [aiResponse, setAIResponse] = useState("");

  useEffect(() => {
    fetch(`/api/topics/${params.id}`)
      .then((res) => res.json())
      .then(setTopic);
  }, []);

  const handleAI = async () => {
    const res = await askAI({
      topic: topic.title,
      description: topic.description,
    });

    setAIResponse(res.content);
  };

  if (!topic) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{topic.title}</h1>
      <p className="text-gray-600">{topic.description}</p>

      <button
        onClick={handleAI}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        🤖 Teach Me
      </button>

      {aiResponse && (
        <div className="mt-6 p-4 border rounded">
          <h2 className="font-semibold mb-2">AI Explanation</h2>
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
}