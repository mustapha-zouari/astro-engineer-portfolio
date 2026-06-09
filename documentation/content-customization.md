# Content Customization

This template keeps portfolio content in typed TypeScript files instead of YAML or JSON. Blog article bodies use Markdown because they are long-form content.

## 🧭 Content Model

- Edit portfolio text and structured data in `src/data`.
- Group data by page/domain, not by component implementation detail.
- Edit blog article bodies in `src/content/blog/*.md`.
- Keep images, logos, PDFs, and other static files in `public`.
- Do not hard-code personal portfolio content inside `.astro` components. Components should render values imported from `src/data`.

## 🗂️ Data Domains

- `src/data/site.ts`: global identity, metadata, navigation, asset paths, and shared accessibility labels.
- `src/data/home.ts`: welcome page hero text, biography preview text, and rotating career highlight groups.
- `src/data/contact.ts`: contact footer heading, rights label, and contact links.
- `src/data/blog.ts`: blog index labels, locked-post labels, and article UI labels.
- `src/data/biography`: biography/CV package split across smaller files because it contains more data.

Use a single `.ts` file for compact domains. Use a directory package when a domain becomes large.

## 🌐 Global Site Data

Edit `src/data/site.ts` for cross-site values:

- `firstName`, `lastName`, `fullName`, `role`, `title`, `description`, `author`, and `keywords`
- `siteUrl` for your production URL
- `profileImage`, `profileImageAlt`, `resumePath`, and `resumeDownloadName`
- `navigation` labels and links
- `openToWork` and `openToWorkLabel` for the optional profile badge
- shared accessibility labels such as theme toggle, menu toggle, and back-to-top labels

Keep page-specific copy out of `site.ts`.

`openToWork` is `false` by default. Set it to `true` only when you want the badge to appear on the profile image.

## 🏠 Home Page Data

Edit `src/data/home.ts` for the welcome page:

- `hero.heading`
- `hero.tagline`
- `biographyPreview.heading`
- `biographyPreview.resume`
- `biographyPreview.ctaLabel`
- `careerHighlights` group labels and icons

Use this file for content rendered on `/`. The default highlight entries are derived from biography education and experience data so the sample timeline stays consistent.

## 📬 Contact Data

Edit `src/data/contact.ts` for the contact footer:

- `heading`
- `rightsLabel`
- `links`

Each contact link has:

- `label`: visible label
- `uri`: link target, such as `mailto:hello@example.com` or a social profile URL
- `icon`: short icon text shown in the card
- `value`: visible contact value

Add or remove entries from `contactData.links`.

The sample includes common contact types: email, phone, LinkedIn, GitHub, and Calendly. Keep only the links that make sense for your portfolio.

## 👤 Biography Data

Biography data is larger, so it lives in `src/data/biography`.

- `profile.ts`: page title suffix, description prefix, tab labels, section headings, and resume download labels
- `experience.ts`: work history
- `education.ts`: education and certifications
- `expertise.ts`: skill groups and proficiency levels
- `extras.ts`: languages and interests
- `types.ts`: shared TypeScript interfaces
- `index.ts`: package entry point used by pages and components

Logo fields reference files in `public`. For example, `icon: 'company-placeholder.svg'` resolves to `public/company-placeholder.svg`.

## ✍️ Blog Data

Edit `src/data/blog.ts` for blog UI labels:

- blog page title suffix
- blog page description prefix
- locked-post label and aria text
- article table-of-contents and image-preview labels

Blog articles live in `src/content/blog`. See `documentation/blog-authoring.md` for the full article workflow.

Published article example:

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

Article body goes here.
```

Set `locked: true` for a draft or teaser. Locked posts can appear in the blog list but do not generate public article pages.

The blog schema is defined in `src/content.config.ts`.

## 🧩 Static Assets

Static files live in `public` and are referenced with root-relative URLs or filenames.

Default assets:

- `public/profile.svg`
- `public/resume.pdf`
- `public/company-placeholder.svg`
- `public/education-placeholder.svg`
- `public/favicon.svg`

You can replace these files directly and keep the same config paths. If you rename files, update the matching path in `src/data/site.ts` or icon filename in the biography domain files.
