"use client";
import Category from "@/components/category";
import ExplainArea from "@/components/explainArea";


export default function TopicsLayout() {
  
  return (
    <div className="flex flex-col lg:flex-row h-screen gap-6 p-6 bg-zinc-50 dark:bg-zinc-950">
  
      {/* LEFT SECTION: Categories & Accordions */}
      <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
       <Category/>
      </div>
      {/* RIGHT SECTION: AI Explanation View */}
      <ExplainArea selectedTopic={null}/>
    </div>
  );
}