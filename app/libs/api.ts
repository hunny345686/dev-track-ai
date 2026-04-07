// To get all the topics
export const getTopics = async () => {
  const result = await fetch("/api/topics");
  return result.json();
};

// Create Tocpis
export const createTopic = async (data: any) => {
  // console.log("data => ", data);
  const result = await fetch("/api/topics", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return result.json();
};

// Ask AI about the periculat topic
export const askAI = async (data: any) => {
  const result = await fetch("/api/ai", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return result.json();
};
