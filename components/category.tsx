"use client";
import { useState } from "react";
import { ChevronRight, Code2, Sparkles, BookOpen, X, Wand2 } from "lucide-react";

// Existing Static Data
const CATEGORIES = ["React", "Next.js", "DSA", "System Design", "Node.js", "JavaScript"];
const TOPICS_DATA = [
  { _id: "1", title: "React Server Components", category: "React", description: "Learn about the new paradigm in React 18/19." },
  // ... rest of your topics
];

export default function CategoryAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>("React");
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiInput, setAiInput] = useState({ tech: "", prompt: "" });

  return (
    <div className="max-w-md mx-auto space-y-3 p-4 relative">
      
      {/* HEADER SECTION WITH AI BUTTON */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
          <BookOpen className="w-5 h-5 text-blue-500" />
          Syllabus
        </h2>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md transition-all active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5" />
          AI Generate
        </button>
      </div>

      {/* ACCORDION LIST */}
      <div className="space-y-3">
        {CATEGORIES.map((cat) => {
          const isOpen = openCategory === cat;
          const filteredTopics = TOPICS_DATA.filter(topic => topic.category === cat);

          return (
            <div key={cat} className="border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenCategory(isOpen ? null : cat)}
                className={`w-full flex items-center justify-between p-4 transition-colors ${
                  isOpen ? "bg-zinc-50 dark:bg-zinc-800/50" : "hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Code2 className={`w-5 h-5 ${isOpen ? "text-blue-500" : "text-zinc-400"}`} />
                  <span className={`font-semibold ${isOpen ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500"}`}>{cat}</span>
                </div>
                <ChevronRight className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-90 text-blue-500" : ""}`} />
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="p-4 pt-0 grid gap-2">
                  {filteredTopics.map((topic) => (
                    <div 
                      key={topic._id}
                      onClick={() => setSelectedTopicId(topic._id)}
                      className={`group p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedTopicId === topic._id ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20' : 'border-zinc-100 dark:border-zinc-800'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium">{topic.title}</h3>
                          <p className="text-xs text-zinc-500 line-clamp-1">{topic.description}</p>
                        </div>
                        <Sparkles className="w-4 h-4 text-zinc-300 group-hover:text-blue-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI GENERATOR MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-zinc-100 dark:border-zinc-900 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Wand2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100">AI Topic Generator</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1 block">Technology</label>
                <input 
                  type="text"
                  placeholder="e.g. Next.js, Go, Kubernetes"
                  className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  value={aiInput.tech}
                  onChange={(e) => setAiInput({...aiInput, tech: e.target.value})}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1 block">Specific Requirements</label>
                <textarea 
                  placeholder="e.g. Focus on performance optimization and senior level concepts..."
                  rows={3}
                  className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  value={aiInput.prompt}
                  onChange={(e) => setAiInput({...aiInput, prompt: e.target.value})}
                />
              </div>

              <button 
                className="w-full bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
                onClick={() => {
                   console.log("Generating topics for:", aiInput);
                   setIsModalOpen(false);
                }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                Generate Syllabus
              </button>
            </div>

            <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border-t border-blue-100 dark:border-blue-900/30">
               <p className="text-[10px] text-zinc-500 dark:text-zinc-400 text-center">
                 AI will analyze the documentation and generate 5-10 advanced topics for your selection.
               </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}