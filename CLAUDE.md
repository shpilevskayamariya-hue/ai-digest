# AI Digest — Project Instructions

## Project
This is a blog focused on:
- motherhood
- mental health and psychology
- life balance and recovery
- emotional support for mothers
- child health (practical, non-medical guidance)
The goal:
- help mothers feel calmer, supported, and informed  
- avoid anxiety, guilt, and overwhelming tone 

## Audience
Primary audience:
- mothers with babies (0–2 years)
- tired, overwhelmed, seeking reassurance
Secondary:
- pregnancy / early motherhood

## Tone and writing style
- Warm, supportive, and human (not clinical or robotic)
- Calm and reassuring, not alarming
- Avoid judgment, pressure, or “perfect parenting” tone
- Write as if speaking to a tired but thoughtful mother
- Prefer simple, clear language
Avoid:
- fear-based statements
- overly technical medical language
- strong claims without nuance

## Content Style
- Voice: Write in first person (“I”, “we”), like talking to a friend, not teaching
- Tone: Warm, calm, supportive — honest and relatable, no pressure or judgment
- Language: Simple, everyday words; light colloquial tone + occasional emojis 🙂
- Style: Conversational flow (not rigid), soft transitions, relatable subtitles
- Guidance: Suggest gently (“you can try”), no diagnosing, no strict advice, no fear-based language

## Safety 
- Do NOT provide medical diagnosis
- Do NOT give strict medical prescriptions
- Always add soft disclaimers when needed:
  "If you're concerned, it's best to consult a pediatrician."
- Avoid absolute statements about child health

## Stack
- Astro 6, TypeScript
- MDX, RSS, Sitemap plugins
- Deploy: [Vercel](https://vercel.com)
- Node >= 22.12.0

## Structure
- `src/content/blog/` — digest articles (`.md`)
- `src/components/` — Astro components
- `src/layouts/` — page templates
- `src/pages/` — routes: index, blog, RSS
- `src/styles/` — global styles
- `src/assets/` — images and covers

## Article format
Each article is a `.md` file in `src/content/blog/`

**Frontmatter:**

```markdown
---
title: 'Clear, calm title'
description: 'Short supportive summary (2–3 sentences)'
pubDate: 'YYYY-MM-DD'
# updatedDate: 'YYYY-MM-DD'        — add only if the article was revised after publishing
heroImage: '../../assets/covers/my-cover.jpg'  # recommended; shown in blog listing cards
tags: ['motherhood', 'mental health']
# source: 'https://...'            — optional; cite if article references a specific source
---
```

**Body structure (300–500 words):**

```markdown
Opening paragraph — 2–3 sentences, conversational, sets the emotional tone.

## Section heading (relatable, not clinical)

Body of section. ~80–120 words. First person, soft tone.

## Section heading

Body of section.

## Small things that can help

Gentle suggestions here.

---

One-liner closing. Reassuring. Optional emoji. 💛
```

> Cover images go in `src/assets/` and are referenced with a relative path from the article file.

## Automated Pipeline

The blog has an automated content pipeline that runs weekly via GitHub Actions.

### Pipeline structure
- `scripts/generate.js` — main pipeline script (Node.js)
- `scripts/topics.json` — predefined topic rotation list
- `.github/workflows/digest.yml` — cron schedule (Monday 8am UTC) + manual trigger
- `src/assets/covers/` — generated cover images (one per article)

### Trigger
- **Scheduled:** every Monday at 8:00 UTC via GitHub Actions cron
- **Manual:** `workflow_dispatch` in GitHub Actions UI

### Required secrets (GitHub repo settings)
- `TAVILY_API_KEY` — news search
- `ANTHROPIC_API_KEY` — article generation
- `REPLICATE_API_TOKEN` — cover image generation

### Pipeline steps (in order)
1. Pick topic from `scripts/topics.json` (avoid recently used topics)
2. Search news via Tavily API (query: `"{topic} mothers babies 2025-2026"`, 3–5 results)
3. Write article via Claude API (claude-sonnet-4-6), output: valid `.md` with frontmatter
4. Generate cover image via Replicate (SDXL, watercolor soft style)
5. Save article to `src/content/blog/YYYY-MM-DD-{slug}.md`
6. Save cover to `src/assets/covers/{slug}.png`
7. `git commit` + `git push` → Vercel auto-deploys

---

## News selection criteria

When searching for news, apply these filters:

**Include:**
- Topics relevant to mothers with babies 0–2 years
- Research or guidance on: sleep, feeding, postpartum recovery, child development, emotional wellbeing
- Practical, reassuring content — not alarming
- Sources: parenting organizations, pediatric associations, psychology publications

**Exclude:**
- Politically charged content
- Fear-based headlines ("danger", "risk", "warning")
- Content targeting fathers, educators, or non-parent caregivers as primary audience
- Medical case studies or clinical trial reports (too technical)
- Product reviews or promotional content
- News older than 12 months

---

## Editorial policy

Rules applied during article generation:

1. **One topic per article** — do not combine multiple news stories
2. **Always cite the source** — populate `source:` frontmatter field with the Tavily result URL
3. **No diagnosis** — rephrase any clinical language into everyday terms
4. **No fear** — if a source uses alarming language, reframe it as reassurance
5. **Disclaimer required** when content touches child health:
   `"If you're concerned, it's always worth checking with your pediatrician."`
6. **Avoid repetition** — check existing articles before picking a topic; skip if covered in last 30 days
7. **Cover image tone** — always warm, soft, illustrated (not photorealistic clinical imagery)

---

## Dev commands
- `npm run dev` — dev server on :4321
- `npm run build` — production build
- `npm run preview` — preview build
