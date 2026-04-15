from fastapi import FastAPI, Request


app = FastAPI(title="Midjourney API FastAPI Webhook Example")


@app.get("/health")
async def health() -> dict:
    return {"ok": True, "service": "midjourney-fastapi-webhook"}


@app.post("/webhooks/midjourney")
async def receive_midjourney_webhook(request: Request) -> dict:
    payload = await request.json()
    print("\nReceived Midjourney webhook payload:\n")
    print(payload)

    data = payload.get("data", {})
    task_id = data.get("taskId") or payload.get("taskId")
    status = data.get("status", payload.get("status"))

    return {
        "ok": True,
        "received": True,
        "taskId": task_id,
        "status": status,
    }
