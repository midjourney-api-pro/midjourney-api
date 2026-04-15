const API_KEY = process.env.MIDJOURNEY_API_KEY;
const BASE_URL =
  process.env.MIDJOURNEY_API_BASE_URL || "https://api.midjourney-api.com";
const WEBHOOK_URL =
  process.env.MIDJOURNEY_WEBHOOK_URL ||
  "https://yourapp.com/webhooks/midjourney";

async function main() {
  if (!API_KEY) {
    throw new Error("Missing MIDJOURNEY_API_KEY");
  }

  const prompt =
    process.argv.slice(2).join(" ") ||
    "a futuristic city skyline at sunset --ar 16:9";

  const response = await fetch(`${BASE_URL}/midjourney/v1/submit-jobs`, {
    method: "POST",
    headers: {
      "API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      mode: "fast",
      hookUrl: WEBHOOK_URL,
      timeout: 600,
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));

  const taskId = data?.data?.taskId;
  if (taskId) {
    console.log(`\nTask ID: ${taskId}`);
    console.log(`Poll next with: npm run poll -- ${taskId}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
