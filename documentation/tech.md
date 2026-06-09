# Technology And Architecture

This template is a static Astro site. Pages are generated at build time, portfolio data is loaded from typed TypeScript modules, and blog articles are loaded from Astro content collections.

## 🧱 Project Structure

```text
src/
  components/      Reusable Astro UI components
  content/blog/    Markdown blog articles
  data/            Typed portfolio and UI content
  layouts/         Shared page layouts
  pages/           Astro routes
  styles/          Global and markdown styles
public/            Static assets copied as-is
documentation/     Template documentation
```

## 🔁 Data Flow

Portfolio pages use TypeScript data modules:

```text
src/data/site.ts          -> global identity, metadata, navigation, assets
src/data/home.ts          -> home page hero, preview, highlights
src/data/contact.ts       -> contact footer content
src/data/blog.ts          -> blog and article UI labels
src/data/biography/*      -> biography/CV domain data
```

Components import the data they render. Personal portfolio text should stay in `src/data`, not inside `.astro` components.

## 🧭 Routing

- `/` renders `src/pages/index.astro`.
- `/biography` renders `src/pages/biography.astro`.
- `/blog` renders `src/pages/blog/index.astro`.
- `/blog/[id]` renders published blog articles from `src/pages/blog/[id].astro`.

Blog article URLs use the numeric `id` frontmatter field, for example `/blog/1/`.

## ✍️ Blog Content

Astro content collections load Markdown files from `src/content/blog`. The schema in `src/content.config.ts` validates article metadata.

Published articles need a positive numeric `id` and `locked: false`. Locked drafts may omit `id` and do not generate detail pages.

## ⚙️ Technical Choices

- Astro keeps the site static, fast, and simple to deploy.
- TypeScript data files give autocomplete and type checking for structured portfolio content.
- Markdown is used for blog articles because it is better for long-form writing.
- `astro-icon` and Iconify provide technology icons without custom SVG plumbing.
- Prettier with `prettier-plugin-astro` keeps Astro, TypeScript, Markdown, CSS, and JSON formatting consistent.

## 🧩 Extension Points

- Add new portfolio fields in the relevant `src/data` domain file.
- Split a domain into a directory package when one file becomes too large.
- Add shared UI in `src/components`.
- Add route-level pages under `src/pages`.
- Add static assets under `public` and reference them by root path or filename.

## ✅ Continuous Integration

The repository includes `.github/workflows/build.yml`. It runs on pushes and pull requests to `main`, installs dependencies with `npm ci`, checks formatting, and builds the Astro site.

This workflow validates the template only. It does not deploy the site.
