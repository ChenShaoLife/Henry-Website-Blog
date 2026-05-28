---
title: Markdown Cheatsheet + How to Add Images
description: A complete demo article covering every frontmatter field, markdown syntax, code highlighting, tables, task lists, HTML tricks, and more. Copy it as a template.
pubDate: 2026-05-28
tags: [Guide, Blog, Tutorial]
cover: /images/avatar3.png
draft: true
---

This is a **demo article** for the blog — it shows every supported feature in one place. Next time you write a new post, copy this file, rename it, update the frontmatter, delete this paragraph, and you're set.

> 💡 This article has `draft: false` so it's visible in production. Set it to `true` to hide it (still previewable in dev).

---

## 1. Frontmatter (the `---` block at the top)

Six fields, always in this order:

| Field | Required | Notes |
|---|---|---|
| `title` | ✅ | Post title |
| `description` | ✅ | One-liner — used on the list card and OG share preview |
| `pubDate` | ✅ | `YYYY-MM-DD` format, controls sort order |
| `tags` | Recommended | Array, mix of any language, powers `/blog/tag/[name]` pages |
| `cover` | Optional | Image path — recommended 1200×630 (16:9). Omit for a solid color placeholder |
| `draft` | Required | `true` = hidden, `false` = published |

## 2. Text formatting

Inline: **bold** | *italic* | ~~strikethrough~~ | `inline code` | [link](https://anthropic.com)

Combinations: ***bold italic*** and **`bold code`** both work.

## 3. Heading levels

`#` is reserved for the article title (auto-generated from frontmatter). **Start body content at H2.**

```markdown
## Section heading (H2)
### Sub-section heading (H3)
```

### H3 example

This paragraph sits under an H3 — one level down from H2, with tighter spacing.

## 4. Lists

**Unordered** (`-`):

- First item
- Nested (indent 2 spaces)
  - Level 2
  - Level 2
    - Level 3
- Back to level 1

**Ordered** (`1.` — numbers don't need to increment, markdown handles it):

1. Step one
2. Step two
3. Step three

**Task list** (GFM extension — good for progress tracking):

- [x] Done
- [x] Also done
- [ ] Not started
- [ ] Pending

## 5. Links + images

**External:** [Anthropic](https://www.anthropic.com)

**Internal:** [Back to blog](/blog) | [Homepage](/)

**Images:** drop them in `public/images/`, reference with `/images/filename` (leading slash).

![Henry's avatar](/images/avatar3.png)

Another example:

![Video thumbnail](/images/1.jpg)

> 📐 Cover images: 1200×630 (16:9), JPG/PNG/WebP, under 300KB. In-post images have no size limit, but smaller loads faster.

## 6. Blockquotes

> Use `>` for quotes, callouts, and emphasis. Works well for key takeaways.

> Multi-paragraph quotes are fine too.
>
> Leave a bare `>` line between paragraphs.

## 7. Code

**Inline code** wraps single items: watch out for closure traps when calling `useState()`.

**Code blocks** — three backticks + language name. Gets syntax highlighting, a copy button, and a language badge automatically.

JavaScript:

```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet('world'));

// Async example
async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}
```

Python:

```python
def fibonacci(n):
    """Generate the first n Fibonacci numbers."""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num)
```

Bash / Shell:

```bash
# Set up the project
npm install
npm run dev

# Git workflow
git add .
git commit -m "new post"
git push
```

JSON:

```json
{
  "name": "henry-website",
  "type": "module",
  "dependencies": {
    "astro": "^5.0.0"
  }
}
```

CSS:

```css
.btn-dark {
  background: var(--text);
  color: white;
  border: 2px solid #0A0A0A;
  box-shadow: 4px 4px 0 #0A0A0A;
  transition: transform .15s, box-shadow .15s;
}
.btn-dark:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #0A0A0A;
}
```

Supported languages: `js` `ts` `python` `bash` `shell` `html` `css` `json` `jsx` `tsx` `markdown` `yaml` `sql` `go` `rust` `astro` `vue` `svelte` and more.

## 8. Tables

```markdown
| Col 1 | Col 2 | Col 3 |
|-------|-------|-------|
| data  | data  | data  |
```

Live example:

| Tool | What I use it for | Rating |
|---|---|---|
| Claude Code | AI coding | ⭐⭐⭐⭐⭐ |
| Vite | Frontend builds | ⭐⭐⭐⭐ |
| Astro | Static sites | ⭐⭐⭐⭐⭐ |
| Capcut | Video editing | ⭐⭐⭐⭐ |

Alignment control:

| Left | Center | Right |
|:---|:---:|---:|
| text | text | 42 |
| text | text | 100 |

## 9. Dividers

Three dashes on their own line:

---

Use this to break topics visually.

## 10. Emoji

Paste directly or use your editor's emoji picker:

🚀 ⚡ 🔥 ✨ 💡 🎯 🛠️ 📝 📦 ✅ ❌ ⚠️ 💯 🎉 ❤️

Use them sparingly — one or two per section at most.

## 11. Inline HTML (advanced)

When markdown doesn't cut it, write HTML directly.

### Collapsible block `<details>`

<details>
<summary>Click to expand</summary>

Hidden content goes here. Works well for long FAQs, extra notes, or anything you don't want open by default.

**Markdown still works** inside `<details>`.

</details>

### Keyboard keys `<kbd>`

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy, <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste.

Mac: <kbd>⌘</kbd> + <kbd>C</kbd> / <kbd>⌘</kbd> + <kbd>V</kbd>

### Highlighted text `<mark>`

Normal text, <mark>this part is highlighted</mark>, then back to normal. Good for keywords.

### Superscript / subscript

Math: E = mc<sup>2</sup> — Chemistry: H<sub>2</sub>O — Footnote reference<sup>[1]</sup>

### Custom callout boxes

<div class="callout callout-info">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
  <span><strong>Tip:</strong> This is an info callout. Use <code>callout-info</code> for blue.</span>
</div>

<div class="callout callout-warning">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  <span><strong>Note:</strong> Warning callout. Also available: <code>callout-success</code> (green) and <code>callout-danger</code> (pink).</span>
</div>

### Abbreviations `<abbr>`

<abbr title="GitHub Flavored Markdown">GFM</abbr> is GitHub's Markdown extension — adds task lists, tables, and more.

Hover over <abbr title="Artificial Intelligence">AI</abbr> to see the full term.

## Publishing workflow

1. **Local editor:** `npm run dev` → http://localhost:4321/editor/dev
2. **Click "Copy full .md"** — copies everything including frontmatter
3. **Go to GitHub** → `src/content/blog/en/` → `Add file → Create new file`
4. **Filename:** use the slug from the editor + `.md`, e.g. `my-claude-tips.md`
5. **Paste** the content → scroll to bottom → **Commit**
6. **Vercel auto-builds** (2–3 min) → `/blog/my-claude-tips` is live

## Hiding a post

Set `draft: true` in frontmatter. The post disappears from all lists and returns a 404 at the URL (still visible in dev). Change back to `draft: false` and push to republish.

## Writing tips

1. **Keep titles short** — list cards only show 2 lines
2. **Description under 80 characters** — shorter summaries get more clicks
3. **Hook in the first 2–3 sentences** — let readers decide fast whether to keep reading
4. **Always tag code blocks** — no language name means no syntax highlighting
5. **Write alt text for images** — accessibility and SEO both benefit

---

Done. Copy this file, rename it `your-slug.md`, delete everything from `## 1. Frontmatter` down, and you have a blank template.
