# AI Digest — Project Instructions

Before working on blog articles, read `.claude/rules/article-style.md` for current rules.

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

## Compact Instructions

When compressing context, make sure to preserve:

- The list of already written articles (title + file).
- The current task and its status.
- The architectural decisions made in the current session.
- Errors that have already been found and fixed.

Compressed summary format:

- Written: [list of files].
- In progress: [current task].
- Decisions: [key decisions].

## Dev commands
- `npm run dev` — dev server on :4321
- `npm run build` — production build
- `npm run preview` — preview build
