const express = require("express");

const app = express();
const port = Number(process.env.PORT || 8788);

app.use(express.json({ limit: "2mb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "midjourney-express-webhook" });
});

app.post("/webhooks/midjourney", (req, res) => {
  console.log("\nReceived Midjourney webhook payload:\n");
  console.log(JSON.stringify(req.body, null, 2));

  const taskId = req.body?.data?.taskId || req.body?.taskId || null;
  const status = req.body?.data?.status ?? req.body?.status ?? null;

  res.json({
    ok: true,
    received: true,
    taskId,
    status,
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Express webhook server listening on http://0.0.0.0:${port}`);
  console.log(`POST http://0.0.0.0:${port}/webhooks/midjourney`);
});
