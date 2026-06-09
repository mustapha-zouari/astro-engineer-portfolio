# Contributing

Use this guide when improving the template after the initial setup.

## ✅ Code Quality

- Keep content in `src/data` or `src/content/blog`, not hard-coded in components.
- Keep components focused on rendering and interaction.
- Reuse existing CSS variables from `src/styles/global.css`.
- Prefer small data-domain files over one large configuration file.
- Split larger domains into directory packages with an `index.ts` entry point.
- Avoid adding dependencies unless they remove real complexity.

## 🧩 Data Quality

- Keep sample content generic and consistent.
- Keep home highlights derived from biography data when possible.
- Keep asset paths valid and documented.
- Remove unused sample assets when replacing content.

## 📚 Documentation Quality

- Update `README.md` when adding or removing major documentation.
- Update `documentation/content-customization.md` when data files move.
- Update `documentation/blog-authoring.md` when blog frontmatter or routing changes.
- Update `documentation/tech.md` when project structure or technical choices change.

## 🔍 Validation

Run these checks before finishing a change:

```bash
npm run format:check
npm run build
```

For content or template cleanup, also search for personal references and stale file names.

The GitHub Actions workflow in `.github/workflows/build.yml` runs the same formatting and build checks on pushes and pull requests to `main`.
