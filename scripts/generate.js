/**
 * Automated Motherhood Digest — Content Pipeline
 *
 * Steps:
 *   1. Pick a topic from topics.json (avoid recently used)
 *   2. Search for relevant news via Tavily API
 *   3. Write a blog article via Claude API (claude-sonnet-4-6)
 *   4. Generate a cover image via Replicate (SDXL)
 *   5. Save article .md and cover image to src/
 *   6. Commit and push to trigger Vercel deploy
 *
 * Required env vars:
 *   TAVILY_API_KEY
 *   ANTHROPIC_API_KEY
 *   REPLICATE_API_TOKEN
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// Step 1: Topic selection
// ---------------------------------------------------------------------------

/**
 * Loads topic candidates from topics.json and returns one that hasn't been
 * used in the last 30 days (based on existing article tags/titles).
 * Falls back to a random topic if all have been used recently.
 *
 * @returns {string} Selected topic string
 */
function pickTopic() {
  // TODO: implement topic rotation logic
  //   - read topics.json
  //   - scan src/content/blog/ for recent articles (last 30 days)
  //   - filter out recently covered topics
  //   - return a random unused topic (or fallback to any topic)
  throw new Error('pickTopic() not yet implemented');
}

// ---------------------------------------------------------------------------
// Step 2: News search (Tavily API)
// ---------------------------------------------------------------------------

/**
 * Searches for recent news about the given topic using Tavily.
 *
 * @param {string} topic
 * @returns {Promise<Array<{title: string, url: string, content: string}>>}
 */
async function searchNews(topic) {
  // TODO: implement Tavily search
  //   - POST to Tavily /search endpoint
  //   - query: `${topic} mothers babies 2025-2026`
  //   - return top 3–5 results: { title, url, content }
  //   - apply editorial filters (exclude alarming/promotional/off-topic)
  throw new Error('searchNews() not yet implemented');
}

// ---------------------------------------------------------------------------
// Step 3: Article generation (Claude API)
// ---------------------------------------------------------------------------

/**
 * Uses Claude (claude-sonnet-4-6) to write a blog article.
 *
 * @param {string} topic
 * @param {Array<{title: string, url: string, content: string}>} sources
 * @returns {Promise<{slug: string, markdown: string}>}
 *   slug — URL-safe article identifier
 *   markdown — full .md file content including frontmatter
 */
async function writeArticle(topic, sources) {
  // TODO: implement Claude article generation
  //   - build system prompt from CLAUDE.md editorial guidelines
  //   - pass topic + Tavily snippets as user message
  //   - instruct Claude to output valid .md with frontmatter:
  //       title, description, pubDate, tags, source, heroImage
  //   - validate frontmatter fields before returning
  //   - derive slug from title (slugify)
  throw new Error('writeArticle() not yet implemented');
}

// ---------------------------------------------------------------------------
// Step 4: Cover image generation (Replicate — SDXL)
// ---------------------------------------------------------------------------

/**
 * Generates a cover image for the article using Stability AI SDXL on Replicate.
 *
 * @param {string} topic
 * @param {string} slug
 * @returns {Promise<string>} Absolute path to the saved image file
 */
async function generateCover(topic, slug) {
  // TODO: implement Replicate image generation
  //   - build prompt: soft watercolor illustration, warm pastel tones,
  //     gentle motherhood scene related to topic, no text
  //   - call stability-ai/sdxl model via Replicate API
  //   - poll until complete (can take 15–30s), add timeout
  //   - download output image and save to src/assets/covers/{slug}.png
  //   - return file path
  throw new Error('generateCover() not yet implemented');
}

// ---------------------------------------------------------------------------
// Step 5: Save files
// ---------------------------------------------------------------------------

/**
 * Writes the article .md file and updates heroImage frontmatter to reference
 * the generated cover.
 *
 * @param {string} slug
 * @param {string} markdown
 * @param {string} coverPath - absolute path to the cover image
 */
function saveArticle(slug, markdown, coverPath) {
  // TODO: implement file saving
  //   - derive pubDate from today's date (YYYY-MM-DD)
  //   - filename: src/content/blog/{pubDate}-{slug}.md
  //   - inject heroImage path into frontmatter (relative from article file)
  //   - write markdown to file
  //   - log saved path
  throw new Error('saveArticle() not yet implemented');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('[digest] Starting pipeline...');

  const topic = pickTopic();
  console.log(`[digest] Topic: ${topic}`);

  const sources = await searchNews(topic);
  console.log(`[digest] Found ${sources.length} sources`);

  const { slug, markdown } = await writeArticle(topic, sources);
  console.log(`[digest] Article written: ${slug}`);

  const coverPath = await generateCover(topic, slug);
  console.log(`[digest] Cover image saved: ${coverPath}`);

  saveArticle(slug, markdown, coverPath);
  console.log('[digest] Done. Ready to commit.');
}

main().catch((err) => {
  console.error('[digest] Pipeline failed:', err.message);
  process.exit(1);
});
