"use client";
import { useState } from "react";
import { ChevronRight, Code2, Sparkles, BookOpen, X, Wand2 } from "lucide-react";

// Existing Static Data
const CATEGORIES = ["React", "Next.js", "DSA", "System Design", "Node.js", "JavaScript"];

const TOPICS_DATA = [
  {
    _id: "1",
    title: "React Server Components",
    category: "React",
    description: "Learn about the new paradigm in React 18/19."
  }
];

export default function CategoryAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>("React");
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [loading, setLoading] = useState(false);


  const getTopics = async (topic: string) => {
    try {
      setLoading(true);
      const res = await fetch("/api/create-topic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          topic
        })
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }

      const data = await res.json();
      console.log("API Response:", data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const handleAITopics = () => {
    if (!aiInput.trim()) return;
    getTopics(aiInput);
    setIsModalOpen(false);
  };

  if (loading) return <p>Loding...</p>

  return (
    <div className="max-w-md mx-auto space-y-3 p-4 relative">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-500" />
          Syllabus
        </h2>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg text-xs"
        >
          <Sparkles className="w-4 h-4" />
          AI Generate
        </button>
      </div>

      {/* CATEGORY LIST */}
      <div className="space-y-3">
        {CATEGORIES.map((cat) => {
          const isOpen = openCategory === cat;
          const filteredTopics = TOPICS_DATA.filter(
            (topic) => topic.category === cat
          );

          return (
            <div key={cat} className="border rounded-xl overflow-hidden">

              <button
                onClick={() => setOpenCategory(isOpen ? null : cat)}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex gap-2 items-center">
                  <Code2 className="w-4 h-4" />
                  {cat}
                </div>

                <ChevronRight
                  className={`transition ${isOpen ? "rotate-90" : ""
                    }`}
                />
              </button>

              {isOpen && (
                <div className="p-4 space-y-2">
                  {filteredTopics.map((topic) => (
                    <div
                      key={topic._id}
                      onClick={() => setSelectedTopicId(topic._id)}
                      className={`p-3 border rounded cursor-pointer ${selectedTopicId === topic._id
                        ? "border-blue-500"
                        : ""
                        }`}
                    >
                      <h3>{topic.title}</h3>
                      <p className="text-xs text-zinc-500">
                        {topic.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">

          <div className="bg-black w-full max-w-sm rounded-xl p-6 space-y-4">

            <div className="flex justify-between items-center">
              <h3 className="font-bold">AI Topic Generator</h3>

              <button onClick={() => setIsModalOpen(false)}>
                <X />
              </button>
            </div>

            <input
              type="text"
              placeholder="Next.js, Node.js..."
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
              className="w-full border px-4 py-3 rounded"
            />

            <button
              onClick={handleAITopics}
              disabled={loading}
              className="w-full bg-zinc-900 text-white py-3 rounded"
            >
              {loading ? "Generating..." : "Generate Syllabus"}
            </button>

          </div>
        </div>
      )}
    </div>
  );
}