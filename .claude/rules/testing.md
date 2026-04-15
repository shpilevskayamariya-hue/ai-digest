---
description: How to verify and test changes in the ai-digest project
paths:
  - "ai-digest/**"
  - "ai-digest/src/content/blog/**"
---

# Testing

No automated test suite. Verification is done via build and manual preview.

## Before committing any change

```bash
cd ai-digest
npm run build     # must pass with no errors
npm run preview   # spot-check in browser at localhost:4321
```

## After adding or editing an article

- Check frontmatter is valid: `title`, `description`, `pubDate`, `tags` are all present
- Confirm article body is 300–500 words
- Open preview and verify the article renders correctly on the blog index and detail page
- Check RSS feed renders at `/rss.xml` if the article is new

## After changing a component or layout

- Run `npm run build` and check for TypeScript or Astro errors in output
- Open preview and verify affected pages visually
- Check that no other pages broke (index, blog list, individual articles)
