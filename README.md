# Astro Engineer Portfolio

Astro Engineer Portfolio is a public Astro template for engineers who want a personal site with a welcome page, biography/CV section, blog, contact links, dark mode, and responsive layout.

Live design reference: https://mustapha-zouari.com

## ✨ Features

- Welcome page with career highlights and biography preview
- Biography page with experience, education, expertise, languages, interests, and resume download
- Blog index and static blog article pages powered by Astro content collections
- Contact footer with configurable links
- Light/dark theme toggle and responsive navigation
- Static asset support through the `public` folder

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Build the production site:

```bash
npm run build
npm run preview
```

## 🧭 Customize The Portfolio

Most content lives in page/domain-oriented TypeScript data files under `src/data`.

- `src/data/site.ts`: global identity, metadata, navigation, asset paths, and shared accessibility labels
- `src/data/home.ts`: welcome page hero, biography preview, and rotating career highlights
- `src/data/contact.ts`: contact footer heading, rights label, and contact links
- `src/data/blog.ts`: blog page labels, locked-post labels, and article UI labels
- `src/data/biography`: biography/CV domain package split by profile, experience, education, expertise, and extras

Keep static files in `public`. You can replace the default files directly, for example:

- replace `public/profile.svg` with your own image and keep `profileImage: '/profile.svg'`
- replace `public/resume.pdf` with your own resume and keep `resumePath: '/resume.pdf'`
- add company or school logos to `public`, then reference their filenames from `src/data/biography/experience.ts` or `src/data/biography/education.ts`

If you prefer different file names, update the matching paths in `src/data/site.ts` or logo fields in the biography domain files.

See [documentation/content-customization.md](documentation/content-customization.md) for the full content editing guide.

## 📚 Documentation

- [Content customization](documentation/content-customization.md): where to edit portfolio text, structured data, and static assets.
- [Blog authoring](documentation/blog-authoring.md): how to add, draft, and publish blog articles.
- [Technology and architecture](documentation/tech.md): project structure, data flow, and technical choices.
- [Contributing](documentation/contributing.md): quality rules for future changes.
- [Roadmap](documentation/roadmap.md): future contribution ideas such as SEO, LinkedIn import, and internationalization.

## ✍️ Blog Content

Blog articles live in `src/content/blog`. See [documentation/blog-authoring.md](documentation/blog-authoring.md) for the full article workflow.

Each published article needs frontmatter like this:

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

Set `locked: true` for a draft or teaser. Locked posts can appear in the blog list but do not generate public article detail pages.

## 🧩 Create A Site From This Template

On GitHub, click `Use this template`, create your repository, then update the data files and static assets. After customization, run `npm run build` before deploying to your preferred static hosting provider.

A build-only GitHub Actions workflow is included to run formatting and Astro build checks on pushes and pull requests to `main`. No deployment workflow is included by default.
