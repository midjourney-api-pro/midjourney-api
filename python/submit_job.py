import os
import sys

import requests


API_KEY = os.getenv("MIDJOURNEY_API_KEY")
BASE_URL = os.getenv("MIDJOURNEY_API_BASE_URL", "https://api.midjourney-api.com")
WEBHOOK_URL = os.getenv("MIDJOURNEY_WEBHOOK_URL", "https://yourapp.com/webhooks/midjourney")


def main() -> int:
    if not API_KEY:
        print("Missing MIDJOURNEY_API_KEY")
        return 1

    prompt = " ".join(sys.argv[1:]) or "a futuristic city skyline at sunset --ar 16:9"

    response = requests.post(
        f"{BASE_URL}/midjourney/v1/submit-jobs",
        headers={
            "API-KEY": API_KEY,
            "Content-Type": "application/json",
        },
        json={
            "prompt": prompt,
            "mode": "fast",
            "hookUrl": WEBHOOK_URL,
            "timeout": 600,
        },
        timeout=30,
    )
    response.raise_for_status()
    data = response.json()
    print(data)

    task_id = data.get("data", {}).get("taskId")
    if task_id:
        print(f"\nTask ID: {task_id}")
        print(f"Poll next with: python3 python/poll_status.py {task_id}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
