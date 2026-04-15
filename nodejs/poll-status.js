const API_KEY = process.env.MIDJOURNEY_API_KEY;
const BASE_URL =
  process.env.MIDJOURNEY_API_BASE_URL || "https://api.midjourney-api.com";

async function main() {
  if (!API_KEY) {
    throw new Error("Missing MIDJOURNEY_API_KEY");
  }

  const taskId = process.argv[2];
  if (!taskId) {
    throw new Error("Usage: npm run poll -- <task_id>");
  }

  const response = await fetch(`${BASE_URL}/midjourney/v1/job-status`, {
    method: "POST",
    headers: {
      "API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskIds: [taskId],
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
