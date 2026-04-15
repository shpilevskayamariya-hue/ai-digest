# AI Digest — Project Instructions

## Article style

See `.claude/rules/article-style.md` — tone, audience, content principles, safety, and article format rules (applies to `src/content/blog/**`).

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
