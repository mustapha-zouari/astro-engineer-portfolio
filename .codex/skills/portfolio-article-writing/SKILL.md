---
name: portfolio-article-writing
description: Write, review, or improve Markdown blog articles for this Astro engineer portfolio template. Use when adding a new post under src/content/blog, editing article frontmatter, drafting technical article structure, improving article clarity, or preparing a draft/locked article for publication.
---

# Portfolio Article Writing

## Workflow

1. Create or edit Markdown articles in `src/content/blog`.
2. Keep article metadata in frontmatter.
3. Use `locked: true` for drafts or teasers.
4. Use a stable numeric string `id` only for published articles.
5. Run `npm run build` after changing article metadata or publishing state.

## Published Article Frontmatter

```md
---
id: '3'
title: 'My Article Title'
description: 'Short article summary.'
tags:
    - Engineering
publishedAt: 2026-03-01
locked: false
---
```

## Draft Frontmatter

```md
---
title: 'Draft: My Upcoming Article'
description: 'Short teaser for an article that is not published yet.'
tags:
    - Draft
locked: true
---
```

## Writing Guidelines

- Start with the problem or context.
- Explain the core idea in simple English.
- Use short paragraphs and direct sentences.
- Add practical examples when they make the idea easier to apply.
- Use fenced code blocks for commands, configuration, or code snippets.
- Add diagrams only when they clarify structure or flow.
- Keep titles and descriptions specific enough for blog cards.
- End with a short takeaway or next step.

## Suggested Article Shape

```md
## Context

What problem or situation motivated the article?

## Core Idea

What is the main concept or decision?

## Example

Show a practical example, command, configuration, or code snippet.

## Takeaway

Summarize what the reader should remember or do next.
```

## Assets

Put article images and diagrams in `public/blog/<article-folder>/`.

Reference them from Markdown with root-relative paths:

```md
![Architecture diagram](/blog/my-article/architecture.svg)
```
