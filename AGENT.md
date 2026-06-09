# Codex Agent Guide

## Project Overview

This is an Astro portfolio and blog template. The site is static, with portfolio content and profile configuration kept in TypeScript modules under `src/data`.

## Useful Commands

- `npm run dev` - start the Astro development server.
- `npm run build` - build the production site.
- `npm run preview` - preview the production build locally.
- `npm run format` - format the repository with Prettier.
- `npm run format:check` - check formatting without writing changes.

## Repository Structure

- `src/pages` contains route-level Astro pages.
- `src/layouts` contains shared page layouts.
- `src/components` contains reusable Astro components.
- `src/data` contains page/domain-oriented typed data objects.
- `src/data/biography` is a larger biography/CV domain package split into profile, experience, education, expertise, extras, and shared types.
- `src/styles/global.css` contains global design tokens, base styles, and shared layout/card utilities.
- `src/content/blog` contains Markdown blog articles.
- `public` contains static assets referenced by URL or filename, including profile image, logos, resume PDF, and favicon.
- `documentation` contains user-facing customization, blog authoring, technology, architecture, and contribution guides.

## Coding Conventions

- Prefer existing Astro components and data modules over adding new frameworks or runtime dependencies.
- Keep structured portfolio content in `src/data`, grouped by page/domain.
- Keep global site identity and asset paths in `src/data/site.ts`.
- Keep large domains split into a directory package with an `index.ts` import surface.
- Keep article content in `src/content/blog`.
- Keep documentation aligned with README links and current file names.
- Use TypeScript interfaces for structured data additions in `src/data`.
- Use `astro-icon` with Iconify icon names where icons are needed.
- Keep edits scoped to the requested feature or fix.

## Validation

Before finishing code changes, run the smallest useful checks:

- `npm run format:check` for formatting-only or content changes.
- `npm run build` for Astro component, page, style, or data shape changes.
