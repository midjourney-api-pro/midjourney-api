# Midjourney API Examples

Example code for using Midjourney API in real developer workflows.

This repository is a lightweight examples repo for developers who want to:

- submit Midjourney image jobs programmatically
- poll job status with `taskId`
- receive results by webhook callback
- use Python or Node.js examples as a starting point

## Midjourney API

Midjourney API lets developers generate AI images programmatically with:

- REST API
- `taskId`-based async workflow
- webhook callbacks via `hookUrl`
- job-status polling
- fast and relaxed mode
- pay-as-you-go pricing

Main docs:

- Website: https://www.midjourney-api.com/
- Getting started: https://www.midjourney-api.com/getting-started
- Pricing: https://www.midjourney-api.com/pricing
- Webhook guide: https://www.midjourney-api.com/webhook
- Python guide: https://www.midjourney-api.com/python
- Node.js guide: https://www.midjourney-api.com/nodejs

## Repository Structure

```text
.
├── .env.example
├── .gitignore
├── package.json
├── requirements.txt
├── nodejs
│   ├── poll-status.js
│   ├── submit-job.js
│   └── webhook-server.js
└── python
    ├── poll_status.py
    ├── submit_job.py
    └── webhook_server.py
```

## Quick Start

1. Get an API key from https://midjourney-api.com/dashboard
2. Copy `.env.example` to `.env`
3. Add your `MIDJOURNEY_API_KEY`
4. Run one of the examples below

## Environment Variables

Example values live in [.env.example](.env.example).

- `MIDJOURNEY_API_KEY`
- `MIDJOURNEY_API_BASE_URL`
- `MIDJOURNEY_WEBHOOK_URL`

## Python Examples

Install dependencies:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Run examples:

```bash
python3 python/submit_job.py
python3 python/poll_status.py YOUR_TASK_ID
python3 python/webhook_server.py
```

## Node.js Examples

Requirements:

- Node.js 18+

Install dependencies:

```bash
npm install
```

Run examples:

```bash
npm run submit
npm run poll -- YOUR_TASK_ID
npm run webhook
```

## Example Workflow

1. Submit a job
2. Receive a `taskId`
3. Poll for status or handle a webhook callback
4. Use the returned image URL in your app

Example submit request:

```bash
curl -X POST "https://api.midjourney-api.com/midjourney/v1/submit-jobs" \
  -H "Content-Type: application/json" \
  -H "API-KEY: your_api_key" \
  -d '{
    "prompt": "a cinematic product campaign visual --ar 16:9",
    "mode": "fast",
    "hookUrl": "https://yourapp.com/webhooks/midjourney"
  }'
```

## Example Use Cases

- SaaS products: https://www.midjourney-api.com/saas
- E-commerce: https://www.midjourney-api.com/ecommerce
- Content marketing: https://www.midjourney-api.com/content-marketing
- General use cases: https://www.midjourney-api.com/use-cases

## Next Steps

Start with the guide that best matches your intent:

- Getting started: https://www.midjourney-api.com/getting-started
- Webhook integration: https://www.midjourney-api.com/webhook
- Feature overview: https://www.midjourney-api.com/features
- Pricing: https://www.midjourney-api.com/pricing

## Feedback

If you want a specific SDK, framework example, or integration, open an issue or reach out through the site.

## Contributing

Contributions are welcome. If you want to add examples, improve setup, or contribute framework-specific integrations, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This repository is available under the [MIT License](LICENSE).
