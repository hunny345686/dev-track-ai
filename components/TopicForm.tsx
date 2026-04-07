"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTopic } from "@/app/libs/api";

const CATEGORIES = ["React", "Next.js", "DSA", "System Design", "Node.js", "JavaScript", "AI/ML"];

export default function TopicFrom() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description) return;

    setLoading(true);
    try {
      await createTopic(form);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Failed to create topic:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          
          {/* Title Section */}
          <div className="flex-1 w-full">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1 ml-1">
              Topic Title
            </h2>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Hydration Errors in Next.js"
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* Description Section */}
          <div className="flex-[1.5] w-full">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1 ml-1">
              Brief Description
            </h2>
            <input
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Quick summary of the topic..."
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* Category Dropdown */}
          <div className="w-full md:w-48">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1 ml-1">
              Category
            </h2>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Action Button */}
          <div className="w-full md:w-auto pt-5">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full md:w-auto bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white font-medium px-8 py-2.5 rounded-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 text-sm shadow-sm"
            >
              {loading ? "Saving..." : "Save Topic"}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}