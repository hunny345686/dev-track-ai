"use client";
import React from 'react';
import { Sparkles, BookOpen, CheckCircle2 } from "lucide-react";

// 1. Static AI Explanations for the dummy topics
const AI_CONTENT_DATABASE: Record<string, { summary: string; points: string[] }> = {
  "1": {
    summary: "React Server Components (RSC) represent a major shift in how we build React apps. They allow you to fetch data and render components entirely on the server, sending zero JavaScript to the client.",
    points: [
      "Zero-bundle-size components that only run on the server.",
      "Direct access to backend resources (databases, file systems).",
      "Better performance by reducing the main thread execution on the client."
    ]
  },
  "3": {
    summary: "The Next.js App Router uses a file-system based router built on React Server Components. It supports shared layouts, nested routing, and loading states out of the box.",
    points: [
      "Uses `page.js` for unique UI and `layout.js` for shared UI.",
      "Simplifies data fetching using async/await directly in components.",
      "Support for Streaming and Suspense for progressive UI loading."
    ]
  },
  // Add more entries as needed for your IDs
};

interface ExplainAreaProps {
  selectedTopic: {
    _id: string;
    title: string;
    description: string;
  } | null;
}

export default function ExplainArea({ selectedTopic }: ExplainAreaProps) {
  // Get the specific AI content based on the selected ID
  const content = selectedTopic ? AI_CONTENT_DATABASE[selectedTopic._id] : null;

  return (
    <div className="flex-[3] border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl flex flex-col min-h-[500px]">
      {selectedTopic ? (
        <div className="p-8 flex-1 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 animate-pulse" />
            AI Assistant
          </div>

          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight">
            {selectedTopic.title}
          </h2>
          
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 border-l-2 border-zinc-200 dark:border-zinc-700 pl-4 italic">
            {selectedTopic.description}
          </p>

          <div className="prose dark:prose-invert max-w-none">
            {content ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Main Summary */}
                <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                  {content.summary}
                </p>

                {/* Key Points Section */}
                <div className="grid gap-3 mt-6">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter">Key Takeaways</h4>
                  {content.points.map((point, index) => (
                    <div key={index} className="flex gap-3 items-start p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-600 dark:text-zinc-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Fallback/Loading State if content doesn't exist for that ID yet */
              <div className="space-y-4">
                <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-full animate-pulse" />
                <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-5/6 animate-pulse" />
                <p className="text-zinc-400 text-sm italic mt-4">
                  Generating custom explanation for {selectedTopic.title}...
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
          <div className="w-20 h-20 bg-zinc-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <BookOpen className="w-10 h-10 text-zinc-300 dark:text-zinc-600" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Ready to Learn?</h3>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mt-2">
            Select a specific topic from the sidebar categories to generate an AI deep-dive and code examples.
          </p>
        </div>
      )}
    </div>
  );
}