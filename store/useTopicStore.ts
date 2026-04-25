import { create } from "zustand";



export const useTopicStore = create((set) => ({
  aiExplanation: "",
  setAiExplanation: (text) => set({ aiExplanation: text }),
  cearAiExplanation: () => set({ aiExplanation: "" }),
}));
