"use client";
import { useTopicStore } from "@/store/useTopicStore";
import { BookOpen } from "lucide-react";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

export default function ExplainArea() {
  const aiExplanation = useTopicStore((state) => state.aiExplanation);
  console.log(aiExplanation)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-8 text-zinc-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex-[3] border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl flex flex-col min-h-[500px]">

      {aiExplanation ? (
        <div className="p-8 overflow-y-auto whitespace-pre-line text-zinc-800 dark:text-zinc-200">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(aiExplanation || ""),
            }}
          />
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
          <div className="w-20 h-20 bg-zinc-50 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <BookOpen className="w-10 h-10 text-zinc-300 dark:text-zinc-600" />
          </div>

          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Ready to Learn?
          </h3>

          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mt-2">
            Select a topic from sidebar to generate AI explanation.
          </p>
        </div>
      )
      }

    </div >
  );
}