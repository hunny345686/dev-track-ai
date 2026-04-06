"use client";
import { useTopicStore } from "@/store/useTopicStore";
import { useEffect } from "react";
import { getTopics } from "./libs/api";
import TopicCard from "@/components/TopicCard";

export default function Home() {

const {topics, setTopic} =useTopicStore()

useEffect(()=>{
getTopics().then(setTopic)
})
  return (
   <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">📚 Topics</h1>
    <div className="grid gap-4">
      {topics.map((topic)=>(
        <TopicCard key={topic._id} topic={topic}/>
      ))}
    </div>
   </div>
  );
}
