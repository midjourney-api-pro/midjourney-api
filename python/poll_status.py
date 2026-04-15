import os
import sys

import requests


API_KEY = os.getenv("MIDJOURNEY_API_KEY")
BASE_URL = os.getenv("MIDJOURNEY_API_BASE_URL", "https://api.midjourney-api.com")


def main() -> int:
    if not API_KEY:
        print("Missing MIDJOURNEY_API_KEY")
        return 1

    if len(sys.argv) < 2:
        print("Usage: python3 python/poll_status.py <task_id>")
        return 1

    task_id = sys.argv[1]

    response = requests.post(
        f"{BASE_URL}/midjourney/v1/job-status",
        headers={
            "API-KEY": API_KEY,
            "Content-Type": "application/json",
        },
        json={"taskIds": [task_id]},
        timeout=30,
    )
    response.raise_for_status()
    print(response.json())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
