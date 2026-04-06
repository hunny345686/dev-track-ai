import { create } from "zustand";

interface Topic {
  _id?: string;
  title: string;
  description: string;
  category: string;
  status: string;
  confidence: number;
}

interface TopicStore {
  topics: Topic[];
  setTopic: (topics: Topic[]) => void;
  addTopic: (topic: Topic[]) => ;
}

export const useTopicStore = create<TopicStore>((set) => ({
  topics: [],
  setTopic: (topics) => set({ topics }),
  addTopic: (topic) =>
    set((state) => {
      topics: [...state.topics, topic];
    }),
}));
