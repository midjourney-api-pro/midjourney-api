# Contributing

Thanks for contributing to `midjourney-api`.

This repository is intended to stay small and practical. The best contributions are:

- new runnable examples
- fixes to existing examples
- clearer README documentation
- framework-specific webhook examples
- better error handling or environment setup

## Before You Open a PR

Please make sure your change:

1. keeps examples easy to read
2. does not hardcode secrets
3. uses `.env`-style configuration where appropriate
4. is focused on a real developer workflow

## Local Checks

### Node.js

```bash
node --check nodejs/submit-job.js
node --check nodejs/poll-status.js
node --check nodejs/webhook-server.js
```

### Python

```bash
python3 -m py_compile python/submit_job.py python/poll_status.py python/webhook_server.py
```

## Pull Request Guidelines

- Keep PRs scoped and easy to review
- Update `README.md` if usage changes
- Add or update `.env.example` if new environment variables are introduced
- Prefer simple examples over framework-heavy abstractions

## Good First Contributions

- add a TypeScript example
- add an Express or FastAPI webhook example
- add retry/error-handling examples
- improve Windows-friendly setup notes

## Questions

If you are unsure whether something belongs here, open an issue first and describe:

- the workflow you want to support
- the example files you plan to add
- who the example would help
