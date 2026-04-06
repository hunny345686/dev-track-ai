import Link from "next/link";

function TopicCard({ topic }: { topic: any }) {
  return (
    <Link href={`/topic/${topic._id}`}>
      <div className="border p-4 rounded-xl hover:shadow cursor-pointer">
        <h2 className="font-semibold text-lg">{topic.title}</h2>
        <p className="text-sm text-gray-500">{topic.category}</p>

        <div className="flex justify-between mt-2 text-sm">
          <span>Status: {topic.status}</span>
          <span>Confidence: {topic.confidence}/5</span>
        </div>
      </div>
    </Link>
  );
}

export default TopicCard;
