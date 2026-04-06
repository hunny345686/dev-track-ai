"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTopic } from "../libs/api";

export default function Create() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    category: "React",
    description: "",
  });

  const handleSubmit = async () => {
    await createTopic(form);
    router.push("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add Topic</h1>

      <input
        placeholder="Title"
        className="border p-2 w-full mb-2"
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-2"
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}