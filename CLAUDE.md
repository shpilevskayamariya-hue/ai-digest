# AI Digest — Project Instructions

Before working on blog articles, read `.claude/rules/article-style.md` for tone, audience, and content principles.

Before working on the pipeline or scripts, read `.claude/rules/pipeline.md` for pipeline structure and steps.

Before selecting news topics, read `.claude/rules/news-selection.md` for inclusion and exclusion criteria.

Before generating articles, read `.claude/rules/editorial-policy.md` for editorial rules.

## Git & Testing

Before committing code, read `.claude/rules/git-workflow.md` for branch and commit conventions.

Before verifying changes, read `.claude/rules/testing.md` for the testing process.

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

## Dev commands
- `npm run dev` — dev server on :4321
- `npm run build` — production build
- `npm run preview` — preview build

## Compact Instructions

When compacting, always preserve:
- Editorial policy (style, word count, format, forbidden words).
- Full list of articles written in this session (titles and filenames).
- Current article in progress (if any).
- Key decisions made during the session.
