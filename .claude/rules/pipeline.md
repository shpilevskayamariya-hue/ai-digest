---
description: Automated pipeline structure, triggers, secrets, and steps
paths:
  - "scripts/**"
  - ".github/workflows/**"
---

# Automated Pipeline

The blog has an automated content pipeline that runs weekly via GitHub Actions.

## Pipeline structure
- `scripts/generate.js` — main pipeline script (Node.js)
- `scripts/topics.json` — predefined topic rotation list
- `.github/workflows/digest.yml` — cron schedule (Monday 8am UTC) + manual trigger
- `src/assets/covers/` — generated cover images (one per article)

## Trigger
- **Scheduled:** every Monday at 8:00 UTC via GitHub Actions cron
- **Manual:** `workflow_dispatch` in GitHub Actions UI

## Required secrets (GitHub repo settings)
- `TAVILY_API_KEY` — news search
- `ANTHROPIC_API_KEY` — article generation
- `REPLICATE_API_TOKEN` — cover image generation

## Pipeline steps (in order)
1. Pick topic from `scripts/topics.json` (avoid recently used topics)
2. Search news via Tavily API (query: `"{topic} mothers babies 2025-2026"`, 3–5 results)
3. Write article via Claude API (claude-sonnet-4-6), output: valid `.md` with frontmatter
4. Generate cover image via Replicate (SDXL, watercolor soft style)
5. Save article to `src/content/blog/YYYY-MM-DD-{slug}.md`
6. Save cover to `src/assets/covers/{slug}.png`
7. `git commit` + `git push` → Vercel auto-deploys
