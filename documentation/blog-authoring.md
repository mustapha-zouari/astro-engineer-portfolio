# Blog Authoring

Blog posts live in `src/content/blog` and use Markdown with frontmatter.

## ✅ Add A Published Article

Create a new `.md` file in `src/content/blog`:

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

## Context

Write the article body here.
```

The public URL is based on `id`, for example `/blog/3/`.

## 📝 Add A Draft Or Teaser

Use `locked: true` and omit `id`:

```md
---
title: 'Draft: My Upcoming Article'
description: 'A short teaser for an article that is not published yet.'
tags:
    - Draft
locked: true
---
```

Locked articles can appear in the blog list but do not generate article detail pages.

## 🔒 Publishing Rules

- Use a positive numeric string for `id`, such as `'1'`.
- Do not reuse an `id`.
- Do not change an `id` after publishing, because it changes the URL.
- Keep `title` and `description` concise.
- Use `publishedAt` only when the article is ready.
- Run `npm run build` before publishing changes.

## 🖼️ Article Assets

Put article images and diagrams in `public/blog/<article-folder>/`.

Reference them from Markdown with root-relative paths:

```md
![Architecture diagram](/blog/my-article/architecture.svg)
```

Keep image filenames descriptive and avoid spaces.

## ✅ Before Publishing

- Check that `locked` is `false`.
- Check that `id` is unique.
- Check that `title` and `description` read well in a blog card.
- Run `npm run build`.
