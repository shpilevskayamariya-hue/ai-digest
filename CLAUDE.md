# AI Digest — Project Instructions

Before working on blog articles, read `.claude/rules/article-style.md` for current rules.

@.claude/rules/git-workflow.md

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

## Dev commands
- `npm run dev` — dev server on :4321
- `npm run build` — production build
- `npm run preview` — preview build
