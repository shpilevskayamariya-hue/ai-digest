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
Frontmatter:

```markdown
---
title: 'Clear, calm title'
description: 'Short supportive summary (2–3 sentences)'
pubDate: 'YYYY-MM-DD'
tags: ['motherhood', 'mental health']
source: 'optional'
---

Article body. 300–500 words.
```

## Dev commands
- `npm run dev` — dev server on :4321
- `npm run build` — production build
- `npm run preview` — preview build
